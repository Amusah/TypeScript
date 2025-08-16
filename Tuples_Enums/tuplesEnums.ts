/******************TUPLES AND ENUMS***************/
/*
  tupples are special type that only exists in typeScript. 
  they're like array of fixed lengths and ordered with specific
  types - like super rigid arrays.
*/
const color: [number, number, number] = [255, 0, 45];

type HTTPResponse = [number, string];

const res: HTTPResponse = [200, "OK"];

/******************ENUMS***************/
enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

// Stringed Enums
enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
  ERROR = 500
}

ArrowKeys.RIGHT;

/*
  Initializing enums with the 'cosnt' keyword
  strips down codes that floods the namespace
  at compile time. NB: using 'const' doesn't
  make it a variable
*/
