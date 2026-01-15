import { Body, Controller, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import fs from 'fs/promises'

@Controller('items')
export class ItemsController {
    constructor(private itemsService: ItemsService) { }

    @Post('transactions/purchase')
    async purchase(
        @Body('id') id: string,
        @Body('name') name: string,
        @Body('type') type: string,
        @Body('quantity') quantity: number,
        @Body('pricePerUnit') pricePerUnit: number,
        @Body('hasImage') hasImage: boolean,
    ) {
        const cost = quantity * pricePerUnit

        return this.itemsService.addPurchase({
            id,
            name,
            type,
            quantity,
            pricePerUnit,
            hasImage
        })
    }
}