import React, { Component } from 'react';
import './HotelList.scss';
import axios from 'axios';
import Hotel from '../Hotel/Hotel';


class HotelList extends Component {

    state = {
        hotel: [],
        loading: true,
        error: '',
        nights: {},
        totalPrice: null
    }

    calculatePrice = (nightsData, hotelData) => {
        const valueArray = Object.values(nightsData);

        const pricesArray = hotelData.map(prc => {
            return prc.price;
        })

        let sum = 0;

        for (let i = 0; i < valueArray.length; i++) {
            sum += valueArray[i] * pricesArray[i]
        }

        this.setState({...this.state, totalPrice: sum});

    }
 
    async componentDidMount() {

            await axios.get('https://60007292cb21e10017af8f04.mockapi.io/api/v1/hotels')
            .then(response => {
                this.setState({...this.state.hotel, hotel: response.data, loading: false});
            })
            .catch(err => {
                this.setState({...this.state, loading: false, error: err.message});
            })

            let object = {};

            for (let i = 1; i <= this.state.hotel.length; i++) {
                object[i] = 1;
            }

            this.setState({...this.state.nights, nights: object})

            this.calculatePrice(this.state.nights, this.state.hotel);
    }


    addNights = (id) => {
        let nightsCount = this.state.nights[id] || 0;
        this.setState({
            nights: {...this.state.nights, [id]: nightsCount + 1}
        }, () => this.calculatePrice(this.state.nights, this.state.hotel));
    }

    removeNights = (id) => {
        let nightsCount = this.state.nights[id] || 0;
        if(this.state.nights[id] > 0) {
            this.setState({
                nights: {...this.state.nights, [id]: nightsCount - 1}
            }, () => this.calculatePrice(this.state.nights, this.state.hotel));
        }
    }

    deleteHotel = (id) => {
        const array = [...this.state.hotel];

        const filteredArray = array.filter(element => {
            return id !== element.id
        })

        delete this.state.nights[id];

        this.calculatePrice(this.state.nights, filteredArray);

        this.setState({...this.state.hotel, hotel: filteredArray});
    }

    render() {
        return(
            <div>
                {!this.state.loading ? <div>
                    {this.state.hotel.map(htl => {
                        return <div key={htl.id} >
                                    <hr/>
                                        <Hotel 
                                        id={htl.id}
                                        title={htl.hotel} 
                                        description={htl.description} 
                                        price={htl.price} 
                                        image={htl.photoURL}
                                        nights={this.state.nights}
                                        addNights={this.addNights}
                                        removeNights={this.removeNights}
                                        removeHotel={this.deleteHotel}/>
                                </div>
                            })}
                            <p>Total price: ${this.state.totalPrice}</p>
                </div> : <div className="ring"><div className="lds-dual-ring"></div></div>}
                
            </div>
    
        );

    }


};

export default HotelList;