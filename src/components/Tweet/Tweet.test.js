import axios from 'axios';
import tweets from './tweets.json';

jest.mock('axios');

describe("fetching tweets",()=>{

  it("correctly fetches the user names", ()=>{
    const users =  expect(tweets.map(tweet => tweet.name)).toEqual([
      'Noah Jackson',
      'Darren Wilson',
      'Michael Akinuli',
      'Sarah Udoma',
      'Zara Kanooh'
    ]);

    const resp = {data: users};
    axios.get.mockResolvedValue(resp);

    expect(resp.data).toEqual(users);
  })
// ────────────────────────────────────────────────────────────────────────────────

  it("shows the correct image", ()=>{
    const images = expect(tweets.map(tweet => tweet.image)).toEqual([
      'public/person1.svg',
      'public/person2.svg',
      'public/person3.svg',
      'public/person4.svg',
      'public/person5.svg',
    ]);

    const resp = {data: images};
    axios.get.mockResolvedValue(resp);

    expect(resp.data).toEqual(images);
  })
// ────────────────────────────────────────────────────────────────────────────────

  it("shows the correct tweet", ()=>{
    const tweet = expect(tweets.map(tweet => tweet.tweet)).toEqual([
      "I use this app every day and it's a great way to keep up to date with what's going on in football. It's a shame it won't rotate into landscape mode like its main competitor",
      "Good for scores and commentary but the team lineups have stopped working. ",
      "Good for watching the goals and great for highlights instead of waiting till 10:30 before you can watch highlights on March of the day also no need of sky go",
      "This app has videos for other premier league teams who play and it also gives me nofications when my favourite team plays",
      "This app is brilliant!"
    ])

    const resp = {data: tweet};
    axios.get.mockResolvedValue(resp);

    expect(resp.data).toEqual(tweet);
  })
})

