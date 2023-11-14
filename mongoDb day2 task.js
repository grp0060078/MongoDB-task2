
1.FIND ALL THE TOPICS AND TASKS WHICH ARE THOUGHT IN THE MONTH OF OCTOBER

db.topics.aggregate([
{
$lookup:{
from:"tasks",
localField: "userId",
foreignField: "userId",
as: "result",
}}
]
)

{
  _id: ObjectId("6552f649b874d8d17cc8f48d"),
  name: 'tasks',
  userId: '1',
  endDate: '2020-10-16',
  startDate: '2020-10-15',
  result: [
    {
      _id: ObjectId("6552f7b8b874d8d17cc8f48e"),
      task: 'Write a blog on Difference between HTTP1.1 vs HTTP2',
      userId: '1',
      endDate: '2020-10-16',
      startDate: '2020-10-15'
    },
    {
      _id: ObjectId("65530ee5250a72ff72658338"),
      task: 'Document and window object',
      userId: '1',
      startDate: '2020-10-17',
      endDate: '2020-10-18'
    },
    {
      _id: ObjectId("65530f00250a72ff7265833a"),
      task: ' anonymous function',
      userId: '1',
      startDate: '2020-10-18',
      endDate: '2020-10-19'
    },
    {
      _id: ObjectId("65530f10250a72ff7265833c"),
      task: ' arrow functions',
      userId: '1',
      startDate: '2020-10-20',
      endDate: '2020-10-21'
    },
    {
      _id: ObjectId("65530f20250a72ff7265833e"),
      task: ' IIFE',
      userId: '1',
      startDate: '2020-10-22',
      endDate: '2020-10-23'
    }
  ]
}






2.FIND ALL THE COMPANY DRIVES WHICH APPEARED BETWEEN 15 OCT-2020 AND 31-OCT-2020

db.company_drives.find({
date:{
$gte: ("2020-10-15"),
$lte: ("2020-10-31")
}
}
).toArray()

[
  {
    _id: ObjectId("655315cb250a72ff7265834d"),
    name: 'infosys',
    date: '2020-10-16'
  },
  {
    _id: ObjectId("655315df250a72ff7265834f"),
    name: 'HCL',
    date: '2020-10-18'
  },
  {
    _id: ObjectId("655315f7250a72ff72658351"),
    name: 'WIPRO',
    date: '2020-10-23'
  },
  {
    _id: ObjectId("6553160c250a72ff72658353"),
    name: 'tech mahindra',
    date: '2020-10-27'
  }
]







3.FIND ALL THE COMPANY DRIVES AND STUDENTS WHO ARE APPEARED FOR THE PLACEMENT.


 db.company_drives.find({},{_id:0,name:1,students:1}).toArray()
 
 
 [
  { name: 'zoho', 
    students: '[{name :"student1",appeared:true}]' 
   },
   
  { name: 'infosys', 
    students: '[{name :"student2",appeared:false}]' 
	},
	
  { name: 'HCL', 
  students: '[{name :"student3",appeared:true}]' 
  },
  
  { name: 'WIPRO', 
  students: '[{name :"student4",appeared:true}]'
  },
  
  {
    name: 'tech mahindra',
    students: '[{name :"student5",appeared:false}]'
  },
  
  { name: 'amazon',
  students: '[{name :"student6",appeared:true}]' 
  }
]







4.FIND THE NUMBER OF PROBLEMS SOLVED BY THE USER IN CODEKATA


db.codekatta.find({},{_id:0,name:1,codekatta_problems:1}).toArray()


[
  { name: 'user1',
    codekatta_problems: 10 
},
  { name: 'user2',
    codekatta_problems: 20
  },
  { name: 'user3',
    codekatta_problems: 40
  },
  { name: 'user4',
    codekatta_problems: 60
  },
  { name: 'user5',
    codekatta_problems: 100
  }
]






5.FIND ALL THE MENTORS WITH WHO HAS THE MENTEE'S COUNT MORE THAN 15


db.mentors.find({mentees_count:{$gte :15}}).toArray()[
  
  
  {
    _id: ObjectId("65536971242799e6891db66a"),
    name: 'mentor2',
    mentees_count: 15
  },
  {
    _id: ObjectId("65536982242799e6891db66c"),
    name: 'mentor3',
    mentees_count: 20
  },
  {
    _id: ObjectId("655369a5242799e6891db670"),
    name: 'mentor2',
    mentees_count: 25
  }
]






6.FIND THE NUMBER OF USERS WHO ARE ABSENT AND TASK IS NOT SUBMITTED  BETWEEN 15 OCT-2020 AND 31-OCT-2020


db.users.aggregate([
{
$lookup:{
from:"attendance",
localField: "userId",
foreignField: "userId",
as: "result",
}}
]
){
  _id: ObjectId("655370d4df91ce136b064371"),
  userId: 2,
  task: 'not submited',
  user: '1',
  result: [
    {
      _id: ObjectId("65536f19df91ce136b064370"),
      userId: 2,
      name: 'user1',
      date: '2020-10-16',
      status: 'absent'
    },
    {
      _id: ObjectId("65536f80242799e6891db676"),
      userId: 2,
      name: 'user2',
      date: '2020-10-18',
      status: 'absent'
    },
    {
      _id: ObjectId("65536fe1242799e6891db678"),
      userId: 2,
      name: 'user3',
      date: '2020-10-21',
      status: 'absent'
    },
    {
      _id: ObjectId("65537007242799e6891db67a"),
      userId: 2,
      name: 'user4',
      date: '2020-10-25',
      status: 'present'
    }
  ]
},
{
  _id: ObjectId("65537129242799e6891db67e"),
  user: 2,
  userId: 2,
  task: 'not submited',
  result: [
    {
      _id: ObjectId("65536f19df91ce136b064370"),
      userId: 2,
      name: 'user1',
      date: '2020-10-16',
      status: 'absent'
    },
    {
      _id: ObjectId("65536f80242799e6891db676"),
      userId: 2,
      name: 'user2',
      date: '2020-10-18',
      status: 'absent'
    },
    {
      _id: ObjectId("65536fe1242799e6891db678"),
      userId: 2,
      name: 'user3',
      date: '2020-10-21',
      status: 'absent'
    },
    {
      _id: ObjectId("65537007242799e6891db67a"),
      userId: 2,
      name: 'user4',
      date: '2020-10-25',
      status: 'present'
    }
  ]
},

{
  _id: ObjectId("65537151242799e6891db680"),
  user: 3,
  userId: 2,
  task: 'not submited',
  result: [
    {
      _id: ObjectId("65536f19df91ce136b064370"),
      userId: 2,
      name: 'user1',
      date: '2020-10-16',
      status: 'absent'
    },
    {
      _id: ObjectId("65536f80242799e6891db676"),
      userId: 2,
      name: 'user2',
      date: '2020-10-18',
      status: 'absent'
    },
    {
      _id: ObjectId("65536fe1242799e6891db678"),
      userId: 2,
      name: 'user3',
      date: '2020-10-21',
      status: 'absent'
    },
    {
      _id: ObjectId("65537007242799e6891db67a"),
      userId: 2,
      name: 'user4',
      date: '2020-10-25',
      status: 'present'
    }
  ]
}


{
  _id: ObjectId("6553716a242799e6891db682"),
  user: 4,
  userId: 2,
  task: 'submited',
  result: [
    {
      _id: ObjectId("65536f19df91ce136b064370"),
      userId: 2,
      name: 'user1',
      date: '2020-10-16',
      status: 'absent'
    },
    {
      _id: ObjectId("65536f80242799e6891db676"),
      userId: 2,
      name: 'user2',
      date: '2020-10-18',
      status: 'absent'
    },
    {
      _id: ObjectId("65536fe1242799e6891db678"),
      userId: 2,
      name: 'user3',
      date: '2020-10-21',
      status: 'absent'
    },
    {
      _id: ObjectId("65537007242799e6891db67a"),
      userId: 2,
      name: 'user4',
      date: '2020-10-25',
      status: 'present'
    }
  ]
}

