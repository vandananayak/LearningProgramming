export class Box{
  pair = [];
  public box(){
    const boxes = [1,2,3,4];
    boxes.forEach((box,i)=>{
      boxes.forEach((box,j)=>{
        this.pair.push([boxes[i],boxes[j]]);
      })
    });

    console.log(this.pair)
  }    
}
// O(n^2) complexity