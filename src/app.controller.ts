import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { MemberDto } from './dto/member.dto';
import { TeamDto } from './dto/team.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('members')
  async createMember(@Body() member: MemberDto) {
    return this.appService.createMember(member);
  }

  @Get('members')
  async getMembers(@Query() { filter }: { filter: Record<string, unknown> }) {
    return this.appService.getMembers(filter);
  }

  @Post('teams')
  async createTeam(@Body() team: TeamDto) {
    return this.appService.createTeam(team);
  }

  @Get('teams')
  async getTeams() {
    return this.appService.getTeams();
  }
}
