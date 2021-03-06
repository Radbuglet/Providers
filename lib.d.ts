// Helpers
type Class<T> = Function & { prototype: T };
type ClassInstance<T extends Class<any>> = T extends Class<infer I> ? I : never;

/**
 * Represents a class constructor/type that contains a type static field for use
 * in the provision interface.
 */
type IProvider = Class<any> & { readonly type: symbol; };

/**
 * Generates an interface for a class which provides a class of type "InstanceType<TClass>"". If "TReal" is provided,
 * this type will be used instead of the InstanceType<TClass>. "TReal" is used when the provided class has some generic type information
 * that cannot be inferred by "InstanceType".
 */
export type IProvides<TClass extends IProvider, TReal extends ClassInstance<TClass> = ClassInstance<TClass>> = {
    [_ in TClass["type"]]: TReal
};

/**
 * @alias IProvides
 */
export type P$<TClass extends IProvider, TReal extends ClassInstance<TClass> = ClassInstance<TClass>> = IProvides<TClass, TReal>;

/**
 * @alias IProvides
 */
export type $<TClass extends IProvider, TReal extends ClassInstance<TClass> = ClassInstance<TClass>> = IProvides<TClass, TReal>;