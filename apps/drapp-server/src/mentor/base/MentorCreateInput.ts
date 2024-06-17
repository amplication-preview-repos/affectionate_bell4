/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PairingCreateNestedManyWithoutMentorsInput } from "./PairingCreateNestedManyWithoutMentorsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class MentorCreateInput {
  @ApiProperty({
    required: false,
    type: () => PairingCreateNestedManyWithoutMentorsInput,
  })
  @ValidateNested()
  @Type(() => PairingCreateNestedManyWithoutMentorsInput)
  @IsOptional()
  @Field(() => PairingCreateNestedManyWithoutMentorsInput, {
    nullable: true,
  })
  pairings?: PairingCreateNestedManyWithoutMentorsInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { MentorCreateInput as MentorCreateInput };