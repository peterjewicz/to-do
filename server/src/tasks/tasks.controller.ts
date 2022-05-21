import { Controller, Post, Body, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getTasks() {
    return this.tasksService.getTasks();
  }

  @Post()
  saveTask(@Body() task: any) {
    return this.tasksService.saveTask(task);
  }
}
