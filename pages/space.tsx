import React from 'react'

export default function space() {

    // Get spaces from twitter api and add bearer token to the header from .env file    
    // add cors to the header                     
    const [spaces, setSpaces] = React.useState<any[]>([]);
    React.useEffect(() => {
        fetch('https://api.twitter.com/1.1/search/tweets.json?q=%23twitter%20space&result_type=recent&count=10', {
            headers: {
                Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`
            },
            method: 'GET',
            mode: 'cors'
        })
            .then(res => res.json())
            .then(data => {
                setSpaces(data.statuses);
            }
            )
            .catch(err => console.log(err));
    }, []);

   

  return () => (
    <>
        <div className="flex text-5xl font-light mt-[5rem]  flex-row ml-[5rem] ">
            <div className=" mt-20 leading-relaxed" >
                Discover great <span className="text-twi font-semibold ">Spaces</span> to listen in !
                <div className="text-3xl text-bl text-center leading-relaxed	">Helps you to find your favorite twitter spaces </div>
                <div className="text-center">
                 </div>
            </div>
            <div className="ml-[10rem] w-[520px]">
            </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center">
            {spaces.map(space => (
                <div className="w-full max-w-sm m-2">
                    <div className="bg-twi text-white font-bold rounded-lg p-2">
                        <div className="flex justify-between">
                            <div className="flex-1">
                                <div className="text-xl">{space.user.name}</div>
                                <div className="text-sm">{space.user.screen_name}</div>
                            </div>
                            <div className="flex-1 text-right">
                                <div className="text-sm">{space.created_at}</div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="text-xl">{space.text}</div>
                    </div>
                </div>
            ))}
        </div>

    </>
  )
}
