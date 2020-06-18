# basic-pub-sub-example

Example usage of Redis PUBSUB capabilities

- Publish/Subscribe behaviour with [Redis Pub/Sub](https://redis.io/topics/pubsub)
- Subscribe by pattern behaviours with [PSUBSCRIBE](https://redis.io/commands/psubscribe)
- Example value generation with [Faker](https://www.npmjs.com/package/faker)

## Usage

Prerequisites

- yarn
- node
- docker

```bash
$ yarn install
```

In multiple terminals run:

```
$ yarn server
```

```bash
$ yarn publisher
```

```bash
# For all messages:
$ yarn subscribe

# For specific messages:
$ yarn subscribe {category}
```
