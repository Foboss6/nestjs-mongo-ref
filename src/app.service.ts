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
    return this.memberModel.findOneAndReplace({ email: member.email }, member, {
      upsert: true,
    });
  }

  async getMembers(filter?: Record<string, unknown>) {
    return this.memberModel.find(filter ?? {});
  }

  async createTeam(team: TeamDto) {
    const teamLeadId = await (
      await this.memberModel.findOne({ email: team.teamLead })
    ).toJSON()._id;
    const members = await this.memberModel.find({
      email: { $in: team.members },
    });

    return this.teamModel.findOneAndReplace(
      { name: team.name },
      { ...team, teamLead: teamLeadId, members },
      { upsert: true },
    );
  }

  async getTeamsPopulate() {
    return this.teamModel.findOne().populate('teamLead').populate('members');
  }

  async getTeams() {
    const team = (await this.teamModel.findOne()).toJSON();
    const members = await this.memberModel.find({
      _id: [team.teamLead, ...team.members.map((id) => id)],
    });

    return {
      ...team,
      teamLead: members.find(
        ({ _id }) => _id.toString() === team.teamLead.toString(),
      ),
      members: team.members.map((id) =>
        members.find((member) => member._id.toString() === id.toString()),
      ),
    };
  }
}
