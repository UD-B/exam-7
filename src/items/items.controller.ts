import { Controller, Post } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private itemsService: ItemsService) {}

    @Post('transactions/purchase')
    async purchase() {
        
    }

}