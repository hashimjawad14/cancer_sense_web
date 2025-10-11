var lungsmoking = 0;
var Qs = 0;
setScreen("Start");
onEvent("button1", "click", function( ) {
  setScreen("Start");
});
onEvent("button9", "click", function( ) {
  setScreen("Lung");
});
onEvent("button12", "click", function( ) {
  setScreen("PrePreCerv");
});
onEvent("button10", "click", function( ) {
  setScreen("Breast");
});
onEvent("button11", "click", function( ) {
  setScreen("Prostate");
});
onEvent("button15", "click", function( ) {
  setScreen("Colon");
});
onEvent("button16", "click", function( ) {
  setScreen("Ovarian");
});
onEvent("C:A1Q2Cerv", "click", function( ) {
  setScreen("<21");
});
onEvent("C:A2Q2Cerv", "click", function( ) {
  setScreen("21-29Cerv");
});
onEvent("C:A1Q1Cerv", "click", function( ) {
  setScreen("<21");
});
onEvent("C:A2Q1Cerv", "click", function( ) {
  setScreen("PreCervScreen2");
});
onEvent("C:CervQ1P2A1", "click", function( ) {
  setScreen("MustCallForHelp");
});
onEvent("C:CervQ1P2A2", "click", function( ) {
  setScreen("screen1Cervical");
});
onEvent("2:C:CervQ1P2A1", "click", function( ) {
  setScreen("MustCallForHelp");
});
onEvent("2:C:CervQ1P2A2", "click", function( ) {
  setScreen("screen1Cervical");
});
onEvent("button6", "click", function( ) {
  setScreen("screen1Cervical");
});
onEvent("C:A4Q2Cerv", "click", function( ) {
  setScreen("<21");
});
onEvent("ResetCerv21-29", "click", function( ) {
  setScreen("Start");
});
onEvent("C:A2Q2Cerv", "click", function( ) {
  setScreen("21-29Cerv");
});
onEvent("C:A3Q2Cerv", "click", function( ) {
  setScreen("30-65Cerv");
});
onEvent("ButtonReset", "click", function( ) {
  setScreen("Start");
});
onEvent("Help#", "click", function( ) {
  setScreen("MustCallForHelp");
});
onEvent("Cont", "click", function( ) {
  setScreen("PrePreCerv2");
});
onEvent("C:PrePreCerv2Y", "click", function( ) {
  setScreen("HysterectomyCerv");
});
onEvent("PrePreCerv2", "click", function( ) {
  setScreen("PreCervScreen1");
});
onEvent("HR", "click", function( ) {
  setScreen("Start");
});
onEvent("Colon1:No", "click", function( ) {
  setScreen("Colon2:Screen");
});
onEvent("Colon1:Yes", "click", function( ) {
  setScreen("Colon1:YesScreen");
});
onEvent("button8", "click", function( ) {
  setScreen("Start");
});
onEvent("Colon3:Yes", "click", function( ) {
  setScreen("Colon3:YesScreen");
});
onEvent("Colon3:No", "click", function( ) {
  setScreen("Colon4:Screen");
});
onEvent("button4", "click", function( ) {
  setScreen("Start");
});
onEvent("Colon4:No", "click", function( ) {
  setScreen("Colon5:Screen");
});
onEvent("Colon4:Yes", "click", function( ) {
  setScreen("Colon4:YesScreen");
});
onEvent("Colon5:Yes", "click", function( ) {
  setScreen("Colon5:YesScreen");
});
onEvent("Colon5:No", "click", function( ) {
  setScreen("Colon6:Screen");
});
onEvent("image6", "click", function( ) {
  setScreen("Prostate:Screen1No");
});
onEvent("image5", "click", function( ) {
  setScreen("Prostrate:Screen2");
});
onEvent("button24", "click", function( ) {
  setScreen("Prostate:Screen2Yes");
});
onEvent("button23", "click", function( ) {
  setScreen("Prostate:Screen3");
});
onEvent("3a", "click", function( ) {
  setScreen("Prostate:Screen3a");
});
onEvent("3b", "click", function( ) {
  setScreen("Prostate:Screen3b");
});
onEvent("3c", "click", function( ) {
  setScreen("Prostate:Screen3c");
});
onEvent("3d", "click", function( ) {
  setScreen("Prostate:Screen3d");
});
onEvent("4e", "click", function( ) {
  setScreen("Prostate:Screen3e");
});
onEvent("button29", "click", function( ) {
  setScreen("Prostate:Screen3bNo");
});
onEvent("button30", "click", function( ) {
  setScreen("Prostate:Screen3bYes");
});
onEvent("button22", "click", function( ) {
  setScreen("Start");
});
onEvent("button25", "click", function( ) {
  setScreen("Start");
});
onEvent("button28", "click", function( ) {
  setScreen("Start");
});
onEvent("button34", "click", function( ) {
  setScreen("Start");
});
onEvent("button33", "click", function( ) {
  setScreen("Start");
});
onEvent("button37", "click", function( ) {
  setScreen("Start");
});
onEvent("button35", "click", function( ) {
  setScreen("Start");
});
onEvent("p", "click", function( ) {
  setScreen("Start");
});
onEvent("button7", "click", function( ) {
  setScreen("Breast:Screen2");
});
onEvent("button14", "click", function( ) {
  setScreen("Breast:Screen1Yes");
});
onEvent("button17", "click", function( ) {
  setScreen("Start");
});
onEvent("button18", "click", function( ) {
  setScreen("Breast:Screen2Male");
});
onEvent("button19", "click", function( ) {
  setScreen("Breast:Screen2Female");
});
onEvent("Fa", "click", function( ) {
  setScreen("Breast:Screen2Fa");
});
onEvent("Fb", "click", function( ) {
  setScreen("Breast:Screen2Fb");
});
onEvent("button41", "click", function( ) {
  setScreen("Start");
});
onEvent("button26", "click", function( ) {
  setScreen("Breast:Screen3M");
});
onEvent("button27", "click", function( ) {
  setScreen("Breast:Screen2MYes");
});
onEvent("button38", "click", function( ) {
  setScreen("Breast:Screen3MNo");
});
onEvent("button39", "click", function( ) {
  setScreen("Breast:Screen3MYes");
});
onEvent("button44", "click", function( ) {
  setScreen("Start");
});
onEvent("label99", "click", function( ) {
  open("https://magview.com/ibis-risk-calculator/");
});
onEvent("button40", "click", function( ) {
  setScreen("Start");
});
onEvent("button42", "click", function( ) {
  setScreen("Breast:Screen3F");
});
onEvent("button43", "click", function( ) {
  setScreen("Breast:Screen2FbYes");
});
onEvent("button45", "click", function( ) {
  setScreen("Start");
});
onEvent("button46", "click", function( ) {
  setScreen("Breast:Screen5");
});
onEvent("button47", "click", function( ) {
  setScreen("Breast:Screen4F");
});
onEvent("image9", "click", function( ) {
  setScreen("Breast:Screen4Fa");
});
onEvent("image10", "click", function( ) {
  setScreen("Breast:Screen4Fb");
});
onEvent("button48", "click", function( ) {
  setScreen("Start");
});
onEvent("button49", "click", function( ) {
  setScreen("Start");
});
onEvent("button50", "click", function( ) {
  setScreen("Breast:Screen6");
});
onEvent("button51", "click", function( ) {
  setScreen("Breast:Screen5Yes");
});
onEvent("button52", "click", function( ) {
  setScreen("Start");
});
onEvent("button53", "click", function( ) {
  setScreen("Breast:Screen6No");
});
onEvent("button54", "click", function( ) {
  setScreen("Breast:Screen7");
});
onEvent("button55", "click", function( ) {
  setScreen("Breast:Screen6No");
});
onEvent("button56", "click", function( ) {
  setScreen("Breast:Screen7Yes");
});
onEvent("button2", "click", function( ) {
  setScreen("Start");
});
onEvent("image7", "click", function( ) {
  setScreen("Breast:Screen6Noa");
});
onEvent("image8", "click", function( ) {
  setScreen("Breast:Screen6Nob");
});
onEvent("image11", "click", function( ) {
  setScreen("Breast:Screen6Noc");
});
onEvent("button3", "click", function( ) {
  setScreen("Start");
});
onEvent("button31", "click", function( ) {
  setScreen("Start");
});
onEvent("button32", "click", function( ) {
  setScreen("Start");
});
onEvent("label120", "click", function( ) {
  open("https://bcrisktool.cancer.gov/calculator.html");
});
onEvent("Skin", "click", function( ) {
  setScreen("SkinCancer");
});
onEvent("button67", "click", function( ) {
  setScreen("Skin:Screen1");
});
onEvent("button71", "click", function( ) {
  setScreen("SkinCancer");
});
onEvent("button69", "click", function( ) {
  setScreen("Skin:Screen2");
});
onEvent("button70", "click", function( ) {
  setScreen("Skin:Screen1Yes");
});
onEvent("button83", "click", function( ) {
  setScreen("Start");
});
onEvent("button72", "click", function( ) {
  setScreen("Skin:Screen3");
});
onEvent("button73", "click", function( ) {
  setScreen("Skin:Screen2&8-10Yes");
});
onEvent("button62", "click", function( ) {
  setScreen("Start");
});
onEvent("button75", "click", function( ) {
  setScreen("Skin:Screen4");
});
onEvent("button76", "click", function( ) {
  setScreen("Skin:Screen3-6&7Yes");
});
onEvent("button57", "click", function( ) {
  setScreen("Start");
});
onEvent("button77", "click", function( ) {
  setScreen("Skin:Screen5");
});
onEvent("button78", "click", function( ) {
  setScreen("Skin:Screen3-6&7Yes");
});
onEvent("button81", "click", function( ) {
  setScreen("Skin:Screen6");
});
onEvent("button82", "click", function( ) {
  setScreen("Skin:Screen3-6&7Yes");
});
onEvent("button79", "click", function( ) {
  setScreen("Skin:Screen7");
});
onEvent("button80", "click", function( ) {
  setScreen("Skin:Screen3-6&7Yes");
});
onEvent("button58", "click", function( ) {
  setScreen("Skin:Screen8");
});
onEvent("button59", "click", function( ) {
  setScreen("Skin:Screen3-6&7Yes");
});
onEvent("button60", "click", function( ) {
  setScreen("Skin:Screen9");
});
onEvent("button61", "click", function( ) {
  setScreen("Skin:Screen2&8-10Yes");
});
onEvent("button62", "click", function( ) {
  setScreen("Start");
});
onEvent("button63", "click", function( ) {
  setScreen("Skin:Screen10");
});
onEvent("button64", "click", function( ) {
  setScreen("Skin:Screen2&8-10Yes");
});
onEvent("button68", "click", function( ) {
  setScreen("Skin:Screen11");
});
onEvent("button74", "click", function( ) {
  setScreen("Skin:Screen2&8-10Yes");
});
onEvent("button65", "click", function( ) {
 setScreen("Skin:Screen12");
});
onEvent("button66", "click", function( ) {
 setScreen("Skin:Screen11&12Yes");
});
onEvent("button84", "click", function( ) {
 setScreen("Start");
});
onEvent("button86", "click", function( ) {
 setScreen("SkinNo");
});
onEvent("button87", "click", function( ) {
 setScreen("Skin:Screen11&12Yes");
});
onEvent("button90", "click", function( ) {
  setScreen("Ovarian:Screen2");
});
onEvent("button89", "click", function( ) {
  setScreen("Ovarian:Screen1Yes");
});
onEvent("button92", "click", function( ) {
  setScreen("OvarianNo");
});
onEvent("button101", "click", function( ) {
  setScreen("Start");
});
onEvent("button91", "click", function( ) {
  setScreen("Ovarian:Screen1YesYes&2Yes");
});
onEvent("button93", "click", function( ) {
  setScreen("Start");
});
onEvent("button94", "click", function( ) {
  setScreen("Ovarian:Screen1YesYes&2Yes");
});
onEvent("button95", "click", function( ) {
  setScreen("Ovarian:Screen3");
});
onEvent("button96", "click", function( ) {
  setScreen("Ovarian:Screen3Yes");
});
onEvent("button4yes", "click", function( ) {
  setScreen("MustCallForHelp");
});
onEvent("button4no", "click", function( ) {
  setScreen("OvarianNo");
});
onEvent("button97", "click", function( ) {
  setScreen("Ovarian:Screen4");
});
onEvent("button88", "click", function( ) {
  setScreen("SkinCancer");
});
onEvent("SkinN", "click", function( ) {
  setScreen("Start");
});
onEvent("button36", "click", function( ) {
  setScreen("Start");
});
onEvent("Reset30-65Cerv", "click", function( ) {
  setScreen("Start");
});
onEvent("Colon1:Y", "click", function( ) {
 setScreen("Start");
});
onEvent("Colon2:No", "click", function( ) {
 setScreen("Colon3:Screen");
});
onEvent("Colon2:Yes", "click", function( ) {
 setScreen("Colon2:YesScreen");
});
onEvent("Colon3:No", "click", function( ) {
 setScreen("Colon4:Screen");
});
onEvent("Colon3:Yes", "click", function( ) {
 setScreen("Colon3:YesScreen");
});
onEvent("button4", "click", function( ) {
  setScreen("Start");
});
onEvent("button99", "click", function( ) {
 setScreen("Start");
});
onEvent("button105", "click", function( ) {
  setScreen("Lung:Screen1");
});
onEvent("button106", "click", function( ) {
  setScreen("MustCallForHelp");
});
onEvent("button109", "click", function( ) {
  lungsmoking = lungsmoking+1;
});
onEvent("button109", "click", function( ) {
  setScreen("Lung:Screen2");
});
onEvent("button110", "click", function( ) {
  setScreen("Lung:Screen2");
});
onEvent("button110", "click", function( ) {
  lungsmoking = lungsmoking - 1000;
});
onEvent("A", "click", function( ) {
  if (lungsmoking >= 1) {
    setScreen ("Lung:Screen2AS");
    lungsmoking = 0;
  } else {
    setScreen("Lung:Screen2A");
  }
});
onEvent("button112", "click", function( ) {
  setScreen("Smoking");
});
onEvent("button116", "click", function( ) {
  setScreen("Start");
});
onEvent("button122", "click", function( ) {
  setScreen("Start");
});
onEvent("C", "click", function( ) {
  setScreen("Lung:Screen2B");
});
onEvent("button113", "click", function( ) {
  if (lungsmoking >= 1) {
    setScreen ("Lung:Screen2BNoS");
    lungsmoking = 0;
  } else {
    setScreen("Lung:Screen2BNo");
  }
});
onEvent("button114", "click", function( ) {
  setScreen("Lung:Screen2B2.1");
});
onEvent("button115", "click", function( ) {
  setScreen("Start");
});
onEvent("button119", "click", function( ) {
  setScreen("Lung:Screen2B2.2");
});
onEvent("button118", "click", function( ) {
  setScreen("Lung:Screen2B2.2");
});
onEvent("button118", "click", function( ) {
 Qs = Qs +1;
});
onEvent("button119", "click", function( ) {
  Qs = Qs - 1;
});
onEvent("button120", "click", function( ) {
 Qs = Qs +1;
});
onEvent("button121", "click", function( ) {
  Qs = -1;
});
onEvent("button85", "click", function( ) {
  if (Qs >= 2) {
    SmokingQsYes();
  } else if (Qs === -1)
   {
      setScreen ("Lung:Screen2A");
    }
    else
  {
    SmokingQsNo ();
  }
});
function SmokingQsYes() {
  if (lungsmoking >= 1) {
      setScreen("Lung:Screen2B2YesS");
      lungsmoking = 0;
  } else {
    setScreen("Lung:Screen2B2Yes");
  }
}
onEvent("button123", "click", function( ) {
  setScreen("Start");
});
onEvent("button124", "click", function( ) {
  setScreen("Lung:Screen2B2Yes");
});
function SmokingQsNo() {
   if (lungsmoking >= 1) {
      setScreen("Lung:Screen2BNoS");
      lungsmoking = 0;
  } else {
    setScreen("Lung:Screen2BNo");
  }
}
onEvent("button115", "click", function( ) {
  setScreen("Start");
});
onEvent("button117", "click", function( ) {
  setScreen("Lung:Screen2BNo");
});
onEvent("B", "click", function( ) {
  setScreen("Lung:Screen2B2.1");
});
onEvent("C:A", "click", function( ) {
setScreen("Colon:ScreenA");
});
onEvent("C:B", "click", function( ) {
setScreen("Colon:ScreenB");
});
onEvent("C:C", "click", function( ) {
setScreen("Colon:ScreenC");
});
onEvent("C:D", "click", function( ) {
setScreen("Colon:ScreenD");
});
onEvent("button100", "click", function( ) {
setScreen("Start");
});
onEvent("button102", "click", function( ) {
setScreen("Start");
});
onEvent("button103", "click", function( ) {
setScreen("Start");
});
onEvent("button104", "click", function( ) {
setScreen("Start");
});
