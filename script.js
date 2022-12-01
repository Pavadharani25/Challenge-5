let name = document.getElementById("name");
      let unit = document.getElementById("unit");
      let prefinal = document.getElementById("prefinal");
      let final = document.getElementById("finalmarks");
      let submit = document.getElementById("submit");
      let display = document.getElementById("out");
      let studentdata = [],
        studentdata1 = [];
      submit.addEventListener("click", () => {
        studentdata = [name.value, unit.value, prefinal.value, final.value];
        studentdata1.push(studentdata), (name.value = "");
        (unit.value = ""), (prefinal.value = ""), (final.value = "");
        console.log(studentdata1);
        console.log(studentdata1.length);
        if (studentdata1.length > 4) {
          alert("Entry for only 5 students");
          const sortedData = studentdata1.sort((a, b) => b[3] - a[3]);
          console.log(sortedData);
          let score = parseInt(sortedData[0][3]);
          let score1 = parseInt(sortedData[1][3]);
          let score2 = parseInt(sortedData[2][3]);
          let score3 = parseInt(sortedData[3][3]);
          let score4 = parseInt(sortedData[4][3]);
          let highscore = sortedData[1][3];
          let total = score + score1 + score2 + score3 + score4;
          let avgmarks = total / 5;
          if (score == score1) {
            let studentname = sortedData[0][0];
            let studentname1 = sortedData[1][0];
            display.value = studentname + "and" + studentname1 + "secured highest score of " + highscore + " and Average mark:" +
              avgmarks;
          } else {
            let studentname = sortedData[0][0];
            display.value = studentname + "secured highest score of " + highscore + " and Average mark:" + avgmarks;
          }
        }
      });