import Matter from 'matter-js';

/**
 * All the physical rules that will be applied to whatever system uses this object.
 */
export const Physics = (entities, {touches, time}) => {
    const engine = entities.physics.engine

    Matter.Engine.update(engine, time.delta);
    return entities;
}