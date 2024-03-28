import { Controller, Get, HttpStatus } from '@nestjs/common'
import { Public } from '~/common/decorators'
import { BackResponse } from '~/models/BackResponseModel'
import { ProductsService } from './products.service'

@Controller('/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Public()
  @Get('/popular')
  async getPopular(): Promise<BackResponse> {
    return this.productsService.getPopular()
  }

  @Public()
  @Get('/novelty')
  async getNovelty(): Promise<BackResponse> {
    return this.productsService.getNovelty()
  }
}
