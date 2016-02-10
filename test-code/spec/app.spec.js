describe("testo funzione coach.start", function() {
    
  it("numero calorie da bruciare f", function() { 
      expect(Coach.start("craz")).not.toBe(true);
  });
    
  it("numero calorie da bruciare e", function() { 
      expect(Coach.start("easy")).toBe(true);
  });  
  
  it("numero calorie da bruciare n", function() { 
      expect(Coach.start("normal")).toBe(true);
  }); 

  it("numero calorie da bruciare c", function() { 
      expect(Coach.start("crazy")).toBe(true);
  }); 
  
   
 
});

describe("Coach.Track", function() {
    
  it("walk 50km", function() { 
      Coach.start("crazy");
      expect(Coach.track("walk",50)).toEqual(2500);
  });  
    
  it("walk 50km", function() { 
      Coach.start("crazy");
      expect(Coach.track("wal",50)).toBe(null);
  }); 
 
});
