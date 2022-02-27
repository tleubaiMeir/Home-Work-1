import React, { useMemo, useState } from 'react';
import './style/App.css';
import StoreItem from './components/StoreItem'
import './style/FormComponent.css'
import 'antd/dist/antd.css'
import { Layout, Button} from 'antd'
import MyInput from './components/UI/MyInput';
import MySelect from './components/UI/MySelect';





function App() {

    const { Header, Sider, Content } = Layout;


    const [stores, setStore] = useState([
        { id: 1, title: 'Sulpak', city: 'Astana', opening: '8:00', closing: '21:00', distance: "2000", raiting: 5 },
    ])

    let [search, setSearch] = useState('')

    let [title, setTitle] = useState('')
    let [city, setCity] = useState('')
    let [opening, setOpening] = useState('')
    let [closing, setClosing] = useState('')
    let [distance, setDistance] = useState('')
    let [raiting, setRaiting] = useState('')
    let [selectedStore, setSelectedStore] = useState('')
    
    // 
    

    const addStore = (e) => {
        e.preventDefault();
        const newStore = {
            id: Date.now(),
            title,
            city,
            opening,
            closing,
            distance,
            raiting,
        }
        setStore([...stores, newStore])
        setTitle('')
        setCity('')
        setOpening('')
        setClosing('')
        setDistance('')
        setRaiting('')
    }

    const searchStore = useMemo(() => {
        return stores.filter(store => store.title.toLowerCase().includes(search.toLowerCase()))
    }, [search, stores])


    const sortStore = (sort) => {
        setSelectedStore(sort)
        setStore([...stores].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className='App'>
            <Layout style={{ minHeight: '100vh'}}>
                <Layout>
                    <Header
                        style={{ backgroundColor: '#fff'}}>
                            <form className='form'>
                                <div style={{width: '30%'}}>
                                    <MyInput value={search} onChange={e => setSearch(e.target.value)} placeholder='Поиск...' />
                                    <MySelect defaultValue={"Сортировка"}
                                              value={selectedStore}
                                              onChange={sortStore}
                                              options={[{
                                                  value: 'title',
                                                  name: 'По названию'
                                              },
                                                  {
                                                      value: 'city',
                                                      name: 'По городу'
                                                  }
                                              ]} />
                                </div>
                                <div style={{width: '60%'}}>
                                    <MyInput value={title} onChange={e => setTitle(e.target.value)} placeholder='Название' />
                                    <MyInput value={city} onChange={e => setCity(e.target.value)} placeholder='Город' />
                                    <MyInput type='time' value={opening} onChange={e => setOpening(e.target.value)} placeholder='Время открытия' />
                                    <MyInput type='time' value={closing} onChange={e => setClosing(e.target.value)} placeholder='Время закрытия' />
                                    <MyInput type='number' value={distance} onChange={e => setDistance(e.target.value)} placeholder='Удаленность от центра' />
                                    <MyInput type='number' value={raiting} onChange={e => setRaiting(e.target.value)} placeholder='Рейтинг магазина' />
                                    <Button type='primary' onClick={addStore}> Добавить магазин </Button>
                                </div>
                            </form>
                    </Header>
                    <Content style={{ padding: '15px', background: 'white', marginTop: 550}}>
                        <h1 style={{ textAlign: 'center', color: 'black', width: '1500px', margin: '0 auto', height: 100}} >Список магазинов</h1>
                        <StoreItem stores={searchStore} />
                    </Content>
                </Layout>
            </Layout>

        </div>
    )

}

export default App;
