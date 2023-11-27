const triangleArea = (a, b, c) => {
    if (a + b > c && b + c > a && c + a > b && a >= 0 && b >= 0 && c >= 0) 
    {
        const semiPer = (a + b + c) / 2;
        const area = Math.sqrt(semiPer * (semiPer - a) * (semiPer - b) * (semiPer - c));
        
        return Math.round(area * 1000) / 1000;
    } else {
        return 'Incorrect data';
    }
  };
