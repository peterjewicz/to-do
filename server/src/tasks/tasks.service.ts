import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async getTasks(): Promise<Task[]> {
    return await this.tasksRepository.find();
  }


  async saveTask(task: any): Promise<Task> {
    return await this.tasksRepository.save(task);
  }
}
