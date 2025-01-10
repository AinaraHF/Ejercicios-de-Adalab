'use strict';

const runners = [
    {name: 'Gregory Goyle', time: 56},
    {name: 'Nymphadora Tonks', time: 9},
    {name: 'Luna Lovegood', time: 45},
    {name: 'Cedric Diggory', time: 28},
    {name: 'Cho Chang', time: 35},
  ];

  const winner = runners.reduce((acc, people) => {
    if(people.time < acc.time){
      return people;
    }else{
      return acc;
    }
  }, runners[0] )
 
  console.log(winner);
