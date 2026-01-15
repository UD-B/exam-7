import { Body, Controller, Post } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private itemsService: ItemsService) { }

    @Post('transactions/purchase')
    async purchase(
        @Body('id') id: string,
        @Body('name') name: string,
        @Body('type') type: string,
        @Body('quantity') quantity: number,
        @Body('PricePerUnit') PricePerUnit: number,
        @Body('hasImage') hasImage: boolean,
    ) {
        return this.itemsService.addPurchase({
            id,
            name,
            type,
            quantity,
            PricePerUnit,
            hasImage
        })
    }
}