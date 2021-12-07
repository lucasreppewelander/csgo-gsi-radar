# react-csgo-radar

A radar implementation in react with GSI information

[](/public/Screenshot%202021-12-05%20at%2020.52.43.png)

Heavily inspired by [boltobserv](https://github.com/boltgolt/boltobserv). If you want more control, you might go with that, if you just want a good radar injected into your code as a react component, read further on.

## TODO

```
"pos_x"		"-3230"	// X coordinate,
"pos_y"		"1713"	// Y coordinate,
"scale"		"5.00   // scale

Radar is 1024x1024 pixels
MapCenter is (512, 512)

WorldToMap(position = [x,y,z]) {
  let offsetX = position.x - pos_x / (scale _ 2)
  let offsetY = position.y - pos_y / (-scale _ 2)

  return {
    x: offsetX,
    y: offsetY
  }
}

MapToRadar(position = [x,y,z]) {
  let originOffset = WorldToMap(position)

  let offsetX = (position.x - 512);
  let offsetY = (position.y - 512);

  offsetX += originOffset.x
  offsetY += originOffset.y

  let fscale = 1 / 1024;

  offsetX _= fscale;
  offsetY _= fscale;

  offsetX _= 100;
  offsetY _= 100;

  return {
    x: offsetX,
    y: offsetY
  }
}
```
