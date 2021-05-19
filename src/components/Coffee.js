/**
 * develop fake coffee list
 */

import Cappuccino from '../styles/assets/png/cappuccino.png';
import Corretto from '../styles/assets/png/Corretto.png';
import CMacchiatto from '../styles/assets/png/C.Macchiatto.png';
import IrishTea from '../styles/assets/png/IrishTea.png';
import JamaicanBlu from '../styles/assets/png/Jamaicanblu.png';
import Kofi from '../styles/assets/png/Kofi.png';
import Expresso from '../styles/assets/png/Expresso.png';
import BlackTea from '../styles/assets/png/BlackTea.png';
import HAWAIIKONA from '../styles/assets/png/HAWAIIKONA.png';

const NUM_COFFEE = 9;

const coffeeData = [
  {coffee_name: 'Cappuccino', price: '£20.00', image: Cappuccino},
  {coffee_name: 'Corretto', price: '£25.00', image: Corretto},
  {coffee_name: 'C.Macchiatto', price: '£20.00', image: CMacchiatto},
  {coffee_name: 'Irish Tea', price: '£10.00', image: IrishTea},
  {coffee_name: 'Jamaican blu', price: '£50.00', image: JamaicanBlu},
  {coffee_name: 'Kofi', price: '£15.00', image: Kofi},
  {coffee_name: 'Expresso', price: '£25.00', image: Expresso},
  {coffee_name: 'Black Tea', price: '£20.00', image: BlackTea},
  {coffee_name: 'HAWAII KONA', price: '£35.00', image: HAWAIIKONA},
];

export default coffeeData;
