import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerHydrationActivity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HydrationActivity, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Date?: string | null;
  readonly Time?: string | null;
  readonly HydrationType?: string | null;
  readonly HydrationVolume?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHydrationActivity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HydrationActivity, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Date?: string | null;
  readonly Time?: string | null;
  readonly HydrationType?: string | null;
  readonly HydrationVolume?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type HydrationActivity = LazyLoading extends LazyLoadingDisabled ? EagerHydrationActivity : LazyHydrationActivity

export declare const HydrationActivity: (new (init: ModelInit<HydrationActivity>) => HydrationActivity) & {
  copyOf(source: HydrationActivity, mutator: (draft: MutableModel<HydrationActivity>) => MutableModel<HydrationActivity> | void): HydrationActivity;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly age?: number | null;
  readonly hydration?: number | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly age?: number | null;
  readonly hydration?: number | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}