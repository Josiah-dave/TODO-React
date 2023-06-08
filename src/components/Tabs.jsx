import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Card from './Card';
import DataFetcher from './FetchData';
import { useEffect, useState } from 'react';

//im import 'react-tabs/style/react-tabs.css';


const Tabb = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3002/tasks/');
                const jsonData = await response.json();
                setData(jsonData);
                console.log(jsonData)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);



    return (
        <>

            <Tabs className={'py-10 w-full'}>
                <TabList className={'flex gap-4 justify-center'}>
                    <Tab className={'max-w-auto rounded-3xl text-lg font-semibold bg-white shadow-lg shadow-gray-700 hover:drop-shadow-2xl px-5 py-2 cursor-pointer border'}>Active</Tab>
                    <Tab className={'max-w-auto rounded-3xl text-lg font-semibold bg-white shadow-lg shadow-gray-700 hover:drop-shadow-2xl px-5 py-2 cursor-pointer border'}>Completed</Tab>
                    <Tab className={'max-w-auto rounded-3xl text-lg font-semibold bg-white shadow-lg shadow-gray-700 hover:drop-shadow-2xl px-5 py-2 cursor-pointer border'}>All</Tab>
                </TabList>

                <div className='py-8'>

                    <TabPanel className={'md:flex  w-full flex-wrap justify-start gap-5'}>

                        {data.map(item => (
                            <Card key={item.id} task={item.isDone && item.task} />

                        ))}

                    </TabPanel>

                    <TabPanel className={'md:flex  w-full flex-wrap justify-start gap-5'}>
                        {data.map(item => (
                            <Card key={item.id} task={!item.isDone && item.task} />

                        ))}
                    </TabPanel>
                    <TabPanel className={'md:flex  w-full flex-wrap  justify-start gap-5'}>
                        {data.map(item => (
                            <Card key={item.id} task={item.task} />

                        ))}

                    </TabPanel>
                </div>
            </Tabs>
        </>
    )
}

export default Tabb