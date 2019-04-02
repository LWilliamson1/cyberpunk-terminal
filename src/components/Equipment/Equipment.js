import React, { Component } from 'react';

class Equipment extends Component {
    state = {
        credits: 14,
        bag: [],
        inventory: {
            lightArmor:[
            {
                name: "Padded Jumpsuit",
                price: 1,
                type: "light"
            },
            {
                name: "Kevlar Jacket",
                price: 2,
                type: "light"
            }],
            mediumArmor: [
            {
                name: "Kevlar Bodysuit",
                price: 2,
                type: "medium"
            },
            {
                name: "Standard Ballistic Vest",
                price: 4,
                type: "medium"
            }],
            heavyArmor: [
            {
                name: "TCE Body Armor ",
                price: 3,
                type: "heavy"
            },
            {
                name: "ZA Korp Armor",
                price: 5,
                type: "heavy"
            }
        ],
        meleeWeapons: [
            {
                name: "Baton",
                price: 0
            },
            {
                name: "Hammer",
                price: 0
            },
            {
                name: "Knife",
                price: 0
            },
            {
                name: "Retractable Baton",
                price: 0
            }],
        rangedWeapons: [
            {
                name: "21st Century Pistol",
                price: 5
            },
            {
                name: "KHMA Heavy Pistol",
                price: 8
            },
            {
                name: "Black Market SMG",
                price: 5
            },
            {
                name: "Kasai Corporation SMG",
                price: 6
            },
            {
                name: "Street Shotgun",
                price: 8
            },
            {
                name: "Sniper Rifle",
                price: 10
            },
            {
                name: "Standard Assault Rifle",
                price: 13
            },
            {
                name: "Rapid Fire Shotgun",
                price: 14
            }]
        }
    }

    updateBag = e => {
        let {credits, bag} = this.state;
        let {name, price} =  e.target.dataset;
        if(credits -  price >= 0) {
            bag.push({name: name, price: price})
            this.setState({
                bag: bag,
                credits: credits - e.target.dataset.price
            });
        } else {
            let el = document.getElementById('credits')
            el.classList.remove('blinkMe');
            el.classList.add('blinkMe');
            setTimeout(() => {
                el.classList.remove('blinkMe')
            }, 3000)
        }
    }

    removeItem = e => {
        let { bag, credits } = this.state;
        let index = e.target.dataset.index;

        this.setState({
            credits: parseInt(credits) + parseInt(bag[index].price)
        })
        bag.splice(index, 1);
        this.setState({
            bag: bag
        });
    }

    gearUp = () => {
        let audio = new Audio('industrial_robot.mp3');
        audio.play();
        let el = document.getElementById('screen')
        el.classList.remove('output')
        el.classList.add('_off');
    }

    displayInventory = (item, index) => {
        return (<button className="btn" onClick={this.updateBag} data-price={item.price} data-name={item.name}>{item.name} {item.price}c</button>)
    }

    render() {
        const { credits, bag, inventory } = this.state ;
        return (
            <div>
                <div className="emblem"><span className="icon-information"></span></div>
                <div id="frame" className="frame">
                
                <div id="screen" className="piece output">
                <div className="row">
                    <div className="col-8">
                        <h1>Loadout</h1>
                    </div>
                    <div className="col-3">
                        <h2 id="credits">Credits: {credits}</h2>
                    </div>
                    
                </div>
                <div className="row">
                <div className="col-7">
                <div className="container-fluid">
                    <h2>Armor</h2>
                    <div  className="col-12">
                    <h3>Light</h3>
                    <div className="col-12">
                    {inventory.lightArmor.map(this.displayInventory)}
                    </div>
                    <div>
                    <h3>Medium</h3>
                    <div className="col-12">
                    {inventory.mediumArmor.map(this.displayInventory)}
                    </div>
                    <div>
                    <h3>Heavy</h3>
                    <div className="col-12">
                    {inventory.heavyArmor.map(this.displayInventory)}
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
                <div>
                <div className="container-fluid"> <br />
                    <h2>Weapons</h2>
                    <div className="col-12">
                    <div>
                        <h3>Melee</h3>
                        <div className="col-12">
                        {inventory.meleeWeapons.map(this.displayInventory)}
                        </div>
                    </div>
                    <div>
                        <h3>Weapons</h3>
                        <div className="col-12">
                        {inventory.rangedWeapons.map(this.displayInventory)}
                        </div>
                    </div>
                </div>
                </div>
                </div>
                </div>
                <div className="col col-12 col-md-5">
                    <h2>Cart</h2>
                    {bag.map((item, index) => {
                        return (
                            <div key={index} className="row">
                            <div className="col-9">
                            <span>{item.name} price: {item.price}</span>
                            </div>
                            <div className="col-2">
                            <button onClick={this.removeItem} data-index={index} className="btn">remove</button>
                            </div></div>
                        ) 
                    })}
                    {bag.length > 0 && 
                        <div className="col-3 offset-9">
                        <button onClick={this.gearUp} className="btn btn-lg">Gear Up</button>
                        </div>
                    }
                </div>
                </div>
                <div className="piece scanlines noclick"></div>
                <div className="piece glow noclick"></div>
                
                </div>
                </div>
            </div>
        )
    }
}

export default Equipment;