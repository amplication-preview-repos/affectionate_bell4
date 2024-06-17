/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PairingWhereUniqueInput } from "../../pairing/base/PairingWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PairingUpdateManyWithoutMentorsInput {
  @Field(() => [PairingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PairingWhereUniqueInput],
  })
  connect?: Array<PairingWhereUniqueInput>;

  @Field(() => [PairingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PairingWhereUniqueInput],
  })
  disconnect?: Array<PairingWhereUniqueInput>;

  @Field(() => [PairingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PairingWhereUniqueInput],
  })
  set?: Array<PairingWhereUniqueInput>;
}

export { PairingUpdateManyWithoutMentorsInput as PairingUpdateManyWithoutMentorsInput };