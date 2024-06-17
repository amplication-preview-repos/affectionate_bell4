/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PairingWhereUniqueInput } from "./PairingWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PairingUpdateInput } from "./PairingUpdateInput";

@ArgsType()
class UpdatePairingArgs {
  @ApiProperty({
    required: true,
    type: () => PairingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PairingWhereUniqueInput)
  @Field(() => PairingWhereUniqueInput, { nullable: false })
  where!: PairingWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PairingUpdateInput,
  })
  @ValidateNested()
  @Type(() => PairingUpdateInput)
  @Field(() => PairingUpdateInput, { nullable: false })
  data!: PairingUpdateInput;
}

export { UpdatePairingArgs as UpdatePairingArgs };