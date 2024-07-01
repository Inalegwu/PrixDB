import { Args, Query, Resolver } from "@nestjs/graphql";
import { Driver } from "./driver.entity";
import { DriverService } from "./driver.service";

@Resolver((of) => Driver)
export class DriverResolver {
  constructor(private readonly driver: DriverService) {}

  @Query((returns)=>Driver)
  async getDriverByDriverId(@Args({
        name:"driverId"
    }) driverId:string){
        return this.driver.getDriver(driverId)
    }
}
