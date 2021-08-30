import { Message, Stan } from 'node-nats-streaming';
import { Subjects } from './models/subjects';
interface Event {
    subject: Subjects;
    data: any;
}
export default abstract class Listener<T extends Event> {
    private client;
    abstract subject: T['subject'];
    abstract queueGroupName: string;
    abstract onMessage(data: T['data'], msg: Message): void;
    protected ackWait: number;
    constructor(client: Stan);
    subscriptionOptions(): import("node-nats-streaming").SubscriptionOptions;
    listen(): void;
    parseMessage(msg: Message): any;
}
export {};
