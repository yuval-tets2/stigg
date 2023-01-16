/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreatePlanArgs } from "./CreatePlanArgs";
import { UpdatePlanArgs } from "./UpdatePlanArgs";
import { DeletePlanArgs } from "./DeletePlanArgs";
import { PlanFindManyArgs } from "./PlanFindManyArgs";
import { PlanFindUniqueArgs } from "./PlanFindUniqueArgs";
import { Plan } from "./Plan";
import { Customer } from "../../customer/base/Customer";
import { PlanService } from "../plan.service";

@graphql.Resolver(() => Plan)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PlanResolverBase {
  constructor(
    protected readonly service: PlanService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Plan",
    action: "read",
    possession: "any",
  })
  async _plansMeta(
    @graphql.Args() args: PlanFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Plan])
  @nestAccessControl.UseRoles({
    resource: "Plan",
    action: "read",
    possession: "any",
  })
  async plans(@graphql.Args() args: PlanFindManyArgs): Promise<Plan[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Plan, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Plan",
    action: "read",
    possession: "own",
  })
  async plan(@graphql.Args() args: PlanFindUniqueArgs): Promise<Plan | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Plan)
  @nestAccessControl.UseRoles({
    resource: "Plan",
    action: "create",
    possession: "any",
  })
  async createPlan(@graphql.Args() args: CreatePlanArgs): Promise<Plan> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        customer: args.data.customer
          ? {
              connect: args.data.customer,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Plan)
  @nestAccessControl.UseRoles({
    resource: "Plan",
    action: "update",
    possession: "any",
  })
  async updatePlan(@graphql.Args() args: UpdatePlanArgs): Promise<Plan | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          customer: args.data.customer
            ? {
                connect: args.data.customer,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Plan)
  @nestAccessControl.UseRoles({
    resource: "Plan",
    action: "delete",
    possession: "any",
  })
  async deletePlan(@graphql.Args() args: DeletePlanArgs): Promise<Plan | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Customer, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "read",
    possession: "any",
  })
  async customer(@graphql.Parent() parent: Plan): Promise<Customer | null> {
    const result = await this.service.getCustomer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
