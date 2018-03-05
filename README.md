# redisOplogIssue

`npm start`


And you get something like this

```
I20180305-13:45:14.292(4)? Exception from task: Error: [We could not properly identify the collection by its name: meteor_accounts_loginServiceConfiguration. Make sure you added redis-oplog package before any package that instantiates a collection.]
I20180305-13:45:14.292(4)?     at new ObservableCollection (packages/cultofcoders:redis-oplog/lib/cache/ObservableCollection.js:68:19)
I20180305-13:45:14.292(4)?     at new PublicationEntry (packages/cultofcoders:redis-oplog/lib/cache/PublicationEntry.js:19:37)
I20180305-13:45:14.292(4)?     at PublicationFactory.create (packages/cultofcoders:redis-oplog/lib/cache/PublicationFactory.js:40:32)
I20180305-13:45:14.293(4)?     at eligibleCursors.forEach.cursor (packages/cultofcoders:redis-oplog/lib/publishWithRedis.js:52:44)
I20180305-13:45:14.293(4)?     at Array.forEach (<anonymous>)
I20180305-13:45:14.293(4)?     at PublicationFactory.queue.runTask (packages/cultofcoders:redis-oplog/lib/publishWithRedis.js:50:33)
I20180305-13:45:14.293(4)?     at runWithEnvironment (packages/meteor.js:1238:24)
I20180305-13:45:14.293(4)?     at Object.task (packages/meteor.js:1251:14)
I20180305-13:45:14.293(4)?     at Meteor._SynchronousQueue.SQp._run (packages/meteor.js:869:16)
I20180305-13:45:14.294(4)?     at packages/meteor.js:846:12
```
