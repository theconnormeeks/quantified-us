# https://github.com/tdorssers/TeslaPy

email = 'cmeeks96@gmail.com'

import teslapy
with teslapy.Tesla(email) as tesla:
    vehicles = tesla.vehicle_list()
    myTesla = vehicles[0].get_vehicle_data()

    display_name = myTesla['display_name']
    battery_level = myTesla['charge_state']['battery_level']
    battery_range = myTesla['charge_state']['battery_range']

    print(str(display_name) + ': ' + str(battery_level) + '%' + ' (' + str(battery_range) +  ' mi)')

    

