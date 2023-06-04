import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MemberModel, MemberModelDocument } from './schemas/member.schema';
import { Model } from 'mongoose';
import { TeamModel, TeamModelDocument } from './schemas/team.schema';
import { MemberDto } from './dto/member.dto';
import { TeamDto } from './dto/team.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(MemberModel.name)
    private readonly memberModel: Model<MemberModelDocument>,
    @InjectModel(TeamModel.name)
    private readonly teamModel: Model<TeamModelDocument>,
  ) {}

  async createMember(member: MemberDto) {
    return this.memberModel.findOneAndReplace({ email: member.email }, member);
  }

  async getMembers(filter?: Record<string, unknown>) {
    return this.memberModel.find(filter ?? {});
  }

  async createTeam(team: TeamDto) {
    const teamLeadId = await this.memberModel.findOne({ email: team.teamLead });
    const members = await this.memberModel.find({
      email: { $in: team.members },
    });

    return this.teamModel.findOneAndReplace(
      { name: team.name },
      { ...team, teamLead: teamLeadId, members },
    );
  }

  async getTeams() {
    return this.teamModel.findOne().populate('teamLead').populate('members');
  }
}
