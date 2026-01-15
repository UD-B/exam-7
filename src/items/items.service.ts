import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Items } from './items.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemsService {

    constructor(
        @InjectRepository(Items) private readonly itemsRepository: Repository<Items>,
    ) {
    }
    async addPurchase(data: any) {
        return this.itemsRepository.save(data)
    }
}
