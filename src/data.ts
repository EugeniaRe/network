interface Route {
  uuid: string
  address: string
  mask: string
  gateway: string
  interface: string
}

export const data: Route[] = [
  {
    uuid: '1',
    address: '192.168.1.0',
    mask: '255.255.255.0',
    gateway: '192.168.1.1',
    interface: 'Подключение Ethernet',
  },
  {
    uuid: '2',
    address: '10.0.0.0',
    mask: '255.0.0.0',
    gateway: '10.0.0.1',
    interface: 'Гостевая сеть',
  },
  {
    uuid: '3',
    address: '172.16.0.0',
    mask: '255.240.0.0',
    gateway: '172.16.0.1',
    interface: 'Домашняя сеть',
  },
  {
    uuid: '4',
    address: '192.168.2.0',
    mask: '255.255.255.0',
    gateway: '192.168.2.254',
    interface: 'Подключение Ethernet',
  },
  {
    uuid: '5',
    address: '10.10.0.0',
    mask: '255.255.0.0',
    gateway: '10.10.0.1',
    interface: 'Подключение Ethernet',
  },
  {
    uuid: '6',
    address: '172.31.0.0',
    mask: '255.255.0.0',
    gateway: '172.31.0.1',
    interface: 'Подключение Ethernet',
  },
  {
    uuid: '7',
    address: '192.168.100.0',
    mask: '255.255.255.0',
    gateway: '192.168.100.1',
    interface: 'Домашняя сеть',
  },
  {
    uuid: '8',
    address: '10.20.30.0',
    mask: '255.255.255.0',
    gateway: '10.20.30.1',
    interface: 'Подключение Ethernet',
  },
  {
    uuid: '9',
    address: '192.168.50.0',
    mask: '255.255.255.128',
    gateway: '192.168.50.1',
    interface: 'Гостевая сеть',
  },
]
