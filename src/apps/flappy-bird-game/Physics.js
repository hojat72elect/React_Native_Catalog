import Matter from 'matter-js';

/**
 * All the physical rules that will be applied to whatever system uses this object.
 */
export const Physics = (entities, {touches, time}) => {

    const engine = entities.physics.engine
    const bird = entities.bird.body;

    touches.filter(t => t.type === 'press').forEach(t => {
        Matter.Body.applyForce(bird, bird.position, {x: 0.00, y: -0.1});

    });

    Matter.Engine.update(engine, time.delta);
    return entities;
}