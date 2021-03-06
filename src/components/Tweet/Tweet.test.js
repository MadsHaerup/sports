import mockedAxios from 'axios';
import { act, cleanup, render,screen } from '@testing-library/react';
import Slider from './Slider';
afterEach(cleanup);
jest.mock('axios');

describe('fetches data correctly', function () {
	var response = {
		data: [
      {
        id: 1,
        image: "/person1.svg",
        name: "Noah Jackson",
        tweet: "I use this app every day and it's a great way to keep up to date with what's going on in football. It's a shame it won't rotate into landscape mode like its main competitor"
      },
      {
        id: 2,
        image: "/person2.svg",
        name: "Darren Wilson",
        tweet: "Good for scores and commentary but the team lineups have stopped working."
      },
      {
        id: 3,
        image: "/person3.svg",
        name: "Michael Akinuli",
        tweet: "Good for watching the goals and great for highlights instead of waiting till 10:30 before you can watch highlights on March of the day also no need of sky go"
      },
      {
        id: 4,
        image: "/person4.svg",
        name: "Sarah Udoma",
        tweet: "This app has videos for other premier league teams who play and it also gives me nofications when my favourite team plays"
      },
      {
        id: 5,
        image: "/person2.svg",
        name: "Zara Kanooh",
        tweet: "This app is brilliant!"
      }
    ]
	};
  
	it('fetches the correct name', async ()=> {
		mockedAxios.get.mockResolvedValue(response);

    await act( async()=>render(<Slider/>))
    expect(screen.getAllByText(/Noah Jackson/i, /Darren Wilson/i,/Michael Akinuli/i,/Sarah Udoma/i,/Zara Kanooh/i));
	});

	it('fetches the correct image', async ()=> {
		mockedAxios.get.mockResolvedValue(response);

    await act( async()=>render(<Slider/>))
    // expect(screen.getAllByAltText("profile"));
    expect(screen.queryByRole(<img/>)&& screen.getByRole(src).toBe('/person1.svg'))
	});

	it('fetches the correct tweet', async ()=> {
		mockedAxios.get.mockResolvedValue(response);

    await act( async()=>render(<Slider/>))
    expect(screen.getAllByText(
    /I use this app every day and it's a great way to keep up to date with what's going on in football. It's a shame it won't rotate into landscape mode like its main competitor/i,
    /Good for scores and commentary but the team lineups have stopped working./i,
    /Good for watching the goals and great for highlights instead of waiting till 10:30 before you can watch highlights on March of the day also no need of sky go/i,
    /This app has videos for other premier league teams who play and it also gives me nofications when my favourite team plays/i,
    /This app is brilliant!/i
    ));
	});
});