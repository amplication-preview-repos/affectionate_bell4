/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PairingService } from "../pairing.service";
import { PairingCreateInput } from "./PairingCreateInput";
import { Pairing } from "./Pairing";
import { PairingFindManyArgs } from "./PairingFindManyArgs";
import { PairingWhereUniqueInput } from "./PairingWhereUniqueInput";
import { PairingUpdateInput } from "./PairingUpdateInput";

export class PairingControllerBase {
  constructor(protected readonly service: PairingService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Pairing })
  async createPairing(
    @common.Body() data: PairingCreateInput
  ): Promise<Pairing> {
    return await this.service.createPairing({
      data: {
        ...data,

        mentee: data.mentee
          ? {
              connect: data.mentee,
            }
          : undefined,

        mentor: data.mentor
          ? {
              connect: data.mentor,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        mentee: {
          select: {
            id: true,
          },
        },

        mentor: {
          select: {
            id: true,
          },
        },

        pairedAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Pairing] })
  @ApiNestedQuery(PairingFindManyArgs)
  async pairings(@common.Req() request: Request): Promise<Pairing[]> {
    const args = plainToClass(PairingFindManyArgs, request.query);
    return this.service.pairings({
      ...args,
      select: {
        createdAt: true,
        id: true,

        mentee: {
          select: {
            id: true,
          },
        },

        mentor: {
          select: {
            id: true,
          },
        },

        pairedAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Pairing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async pairing(
    @common.Param() params: PairingWhereUniqueInput
  ): Promise<Pairing | null> {
    const result = await this.service.pairing({
      where: params,
      select: {
        createdAt: true,
        id: true,

        mentee: {
          select: {
            id: true,
          },
        },

        mentor: {
          select: {
            id: true,
          },
        },

        pairedAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Pairing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePairing(
    @common.Param() params: PairingWhereUniqueInput,
    @common.Body() data: PairingUpdateInput
  ): Promise<Pairing | null> {
    try {
      return await this.service.updatePairing({
        where: params,
        data: {
          ...data,

          mentee: data.mentee
            ? {
                connect: data.mentee,
              }
            : undefined,

          mentor: data.mentor
            ? {
                connect: data.mentor,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          mentee: {
            select: {
              id: true,
            },
          },

          mentor: {
            select: {
              id: true,
            },
          },

          pairedAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Pairing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePairing(
    @common.Param() params: PairingWhereUniqueInput
  ): Promise<Pairing | null> {
    try {
      return await this.service.deletePairing({
        where: params,
        select: {
          createdAt: true,
          id: true,

          mentee: {
            select: {
              id: true,
            },
          },

          mentor: {
            select: {
              id: true,
            },
          },

          pairedAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}