export default class Color {
    
        static rgbToHsb(r,g,b) {
        var computedH = 0;
        var computedS = 0;
        var computedB = 0;
        
        // var r = parseInt( (''+r).replace(/\s/g,''),10 ); 
        // var g = parseInt( (''+g).replace(/\s/g,''),10 ); 
        // var b = parseInt( (''+b).replace(/\s/g,''),10 ); 
        
        r=r/255; g=g/255; b=b/255;
        var minRGB = Math.min(r,Math.min(g,b));
        var maxRGB = Math.max(r,Math.max(g,b));
        
        if (minRGB==maxRGB) {
            computedB = minRGB;
            return [0,0,computedB];
        }
        
        // Colors other than black-gray-white:
        var d = (r==minRGB) ? g-b : ((b==minRGB) ? r-g : b-r);
        var h = (r==minRGB) ? 3 : ((b==minRGB) ? 1 : 5);
        computedH = 60*(h - d/(maxRGB - minRGB));
        computedS = (maxRGB - minRGB)/maxRGB;
        computedB = maxRGB;
        return [computedH,computedS,computedB];
    }
}