(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{745:function(t,e,a){t.exports=a(813)},750:function(t,e,a){},751:function(t,e,a){},772:function(t,e){},774:function(t,e){},805:function(t,e){},806:function(t,e){},807:function(t,e){},808:function(t,e){},809:function(t,e){},810:function(t,e){},812:function(t,e,a){t.exports=a.p+"static/media/azukiB.6f9ed360.ttf"},813:function(t,e,a){"use strict";a.r(e);var n=a(15),s=a.n(n),i=a(584),r=a.n(i),u=(a(750),a(10)),o=(a(751),a(8)),c=a.n(o),h=a(11),p=a(1),l=a(2),d=a(9),m=a(12),f=a(52),g=function(t){return t[Math.floor(Math.random()*t.length)]},v=function(t){return Math.random()<t},y=[1,3],w=[6,4],b=[2,5],k=[4,7],I=function(){for(var t=[],e=function(){t.push(g(y)),v(.85)?t.push(g(w)):t.push(t[0])},a=function(){v(.6)?t.push(b[0],b[1]):t.push(k[0],k[1])},n=v(.5)?function(){e(),a()}:function(){a(),e()},s=0;s<2;s++)n();return t},O={1:{dia:"IM7",subWeight:.33,subs:["I\u03949"]},2:{dia:"IIm7",subWeight:.15,subs:["IIm9","II7","II9","II7b9","bVIM7","bVI\u03949","#IVh7"]},3:{dia:"IIIm7",subWeight:.15,subs:["III7","III7b9","IIIh7","#Vo7"]},4:{dia:"IVM7",subWeight:.25,subs:["IV\u03949"]},5:{dia:"V7",subWeight:.3,subs:["V9","V7b9","bII7","bII9","bII7b9","bIIM7","bII\u03949"]},6:{dia:"VIm7",subWeight:.6,subs:["VIm9","VI7","VI9","VI7b9","bVI7","bVI9","bVI7b9","bIIIM7","bIII7","bIII9","bIII7b9","bIIIo7","Io7","#Io7"]},7:{dia:"VIIh7",subWeight:.3,subs:["VII7","VII7b9","VIIo7","bVII7","bVII9","bVII7b9","IVm7","IVm9","IVmM7","IVmM9","#IIo7"]}},S=[[0,0,1,0],[0,1,0,2]],j=function(t){return t.map((function(t,e){var a=O[t];return v(a.subWeight)&&0!==e?g(a.subs):a.dia}))},L={4:[[1,3],[3,1]],5:[[1,4],[4,1]]},C={4:[[1,3,0],[3,1,2]],5:[[1,3,4],[3,1,2]]},P=function(t,e,a,n){for(var s=v(.5)?0:1,i=a[t.length][s],r=t.map((function(t){return m.e.get(t).pc})),u=i.map((function(t){return r[t]})),o=n,c=[u[0]+o],h=1;h<u.length;h++)for(c.push(u[h]+o);m.e.get(c[h]).midi<m.e.get(c[h-1]).midi;)c[h]=m.e.transpose(c[h],"8P"),o++;for(var p=m.e.get(c[0]).midi,l=m.e.get(c[c.length-1]).midi;e>p;)c=c.map(m.e.transposeBy("8P")),p=m.e.get(c[0]).midi,l=m.e.get(c[c.length-1]).midi;for(;l-e>24;)c=c.map(m.e.transposeBy("-8P")),p=m.e.get(c[0]).midi,l=m.e.get(c[c.length-1]).midi;return{chord:t,voicing:c,idx:s}},_=function(t,e,a,n){for(var s=m.b.distance(t[0],n.chord[0]),i="4P"===s||"4P"===m.b.invert(s)?n.idx?0:1:n.idx,r=a[t.length][i],u=t.map((function(t){return m.e.get(t).pc})),o=r.map((function(t){return u[t]})),c=m.e.get(n.voicing[0]).oct,h=[o[0]+c],p=1;p<o.length;p++)for(h.push(o[p]+c);m.e.get(h[p]).midi<m.e.get(h[p-1]).midi;)h[p]=m.e.transpose(h[p],"8P"),c++;for(var l=m.e.get(h[0]).midi,d=m.e.get(h[h.length-1]).midi;e>l;)h=h.map(m.e.transposeBy("8P")),l=m.e.get(h[0]).midi,d=m.e.get(h[h.length-1]).midi;for(;d-e>24;)h=h.map(m.e.transposeBy("-8P")),l=m.e.get(h[0]).midi,d=m.e.get(h[h.length-1]).midi;return{chord:t,voicing:h,idx:i}},q=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],E=function(){function t(){Object(p.a)(this,t),this.key={},this.progression=[],this.chords=[],this.form=[],this.generateProgression(),this.updateChords()}return Object(l.a)(t,[{key:"generateProgression",value:function(){this.key=m.c.majorKey(g(q)),this.form=g(S),this.progression=function(t){for(var e=[],a=0;a<3;a++)e.push(I());for(var n=[],s=0;s<t.length;s++)n.push(j(e[t[s]]));return n.reduce((function(t,e){return t.concat(e)}),[])}(this.form),this.updateChords()}},{key:"updateChords",value:function(){this.chords=m.f.fromRomanNumerals(this.key.tonic,this.progression).map((function(t){return m.a.get(t)})).map((function(t){var e=m.e.simplify(t.tonic),a=t.aliases[0];return"maj7"===a&&(a="M7"),"dim7"===a&&(a="o7"),e+a}))}},{key:"getChordScales",value:function(){return this.chords.map((function(t){return f.chord.create(t).scales()}))}},{key:"getChordNotes",value:function(t){return this.chords.map((function(e){return f.chord.create(e,t).chord.map((function(t){return m.e.simplify(t.fullName)}))}))}},{key:"getShellVoicings",value:function(t,e){return function(t,e,a,n){for(var s=m.e.get(e+a).midi,i=n?C:L,r=[P(t[0],s,i,a)],u=1;u<t.length;u++){var o=r[u-1];r.push(_(t[u],s,i,o))}return r.map((function(t){return t.voicing}))}(this.getChordNotes(),this.key.tonic,t,e)}},{key:"getRootsAndFifths",value:function(t){return function(t,e,a){var n=m.e.get(e+a).midi;return t.map((function(t){for(var e=m.b.distance(t[0],t[2]),s=m.e.get(t[0]).pc+a,i=m.e.get(s).midi;i<n;)s=m.e.transpose(s,"8P"),i=m.e.get(s).midi;for(;i-n>12;)s=m.e.transpose(s,"-8P"),i=m.e.get(s).midi;return i-n>6&&v(.5)&&(s=m.e.transpose(s,"-8P"),i=m.e.get(s).midi),[s,m.e.transpose(s,e)]}))}(this.getChordNotes(),this.key.tonic,t)}}]),t}(),V=new d.f({frequency:28,Q:.5,type:"highpass"}),X=new d.f({frequency:120,Q:.5,type:"lowpass"}),N=new d.a({order:2,wet:.2}),x=new d.s(-40),A=function(){function t(){Object(p.a)(this,t),this.synth=new d.i({oscillator:{type:"sine"},envelope:{attack:.1,decay:.15,sustain:.75,release:1.5}}).chain(V,X,N,x),this.output=x}return Object(l.a)(t,[{key:"trigger",value:function(t,e,a){this.synth.triggerAttackRelease(t,e,d.q(a)+d.q("32n"))}}]),t}(),M=a(14),R=[["1"," ",".","1"," ","."," "," "],[" "," "," ","1"," ",".","1"," "]],z=[[" "," "," "," "," ","L"," "," "],[" "," "," "," ","1","L"," "," "]],F=function(t){return m.e.transpose(t,"8P")},D=function(){function t(){Object(p.a)(this,t),this.instrument=new A,this.output=this.instrument.output,this.bassline=[],this.sequence=new d.o,this.on=!0}return Object(l.a)(t,[{key:"update",value:function(t){this.bassline=function(t){for(var e=g([t[0][0],F(t[0][0])]),a=e,n=[],s=t.length-1;s>=0;s--){for(var i=[].concat(Object(M.a)(g(R)),Object(M.a)(g(z))),r=Object(u.a)(t[s],2),o=r[0],c=r[1],h=[],p=0;p<i.length;p++){var l=i[p],d=g([m.e.transpose(a,"2m"),m.e.transpose(a,"-2m")]),f=void 0;switch(l){case"1":f=g([o,F(o)]);break;case"L":f=g([o,c,d]);break;default:f=0}0!==f&&(f=m.e.simplify(f)),h.push(f)}var v=i.indexOf("1");0===s&&(h[v]=e),a=h[v],n.unshift(h)}return n.reduce((function(t,e){return t.concat(e)}),[])}(t),this.updateSequence()}},{key:"updateSequence",value:function(){var t=this;this.sequence.dispose(),this.sequence=new d.o((function(e,a){0!==a&&t.on&&t.instrument.trigger(a,"2n",e)}),this.bassline,"16n").start(0),this.sequence.humanize=!0}}]),t}(),B=function(t,e){var a={};return Object.keys(e).map((function(t){return e[t].map((function(e){return t+e}))})).reduce((function(t,e){return t.concat(e)}),[]).forEach((function(e){var n=e.includes("#")?e.replace("#","s"):e;a[e]=t+n+".mp3"})),a},H=B("".concat("/lofigen-magenta","/Samples/Guitar/"),{A:[2,3,4],"A#":[2,3,4],B:[2,3,4],C:[3,6],"C#":[3],D:[3,4,5],"D#":[3,4,5],E:[2,3,4,5],F:[2,3,4],"F#":[2,3,4],G:[2,3,4],"G#":[2,3,4]}),W=function(){function t(e){Object(p.a)(this,t);var a=new d.m({decay:1.5,wet:.6}),n=new d.a({order:9,wet:.2}),s=new d.b(-12,4),i=new d.f({frequency:1200,Q:.5,type:"lowpass"}),r=new d.s(-1),u=new d.m({decay:6,preDelay:.2,wet:.15}),o=new d.d({lowFrequency:690,highFrequency:2400,low:0,mid:-6,high:6});this.sampler=new d.n(H,(function(){return e()})),this.output=new d.g(1),this.sampler.chain(o,a,n,i,s,u,r,this.output)}return Object(l.a)(t,[{key:"trigger",value:function(t,e,a){this.sampler.triggerAttackRelease(t,e,a)}}]),t}(),G=B("".concat("/lofigen-magenta","/Samples/Piano/"),{A:[1,2,3,4,5,6],C:[1,2,3,4,5,6],"D#":[1,2,3,4,5,6],"F#":[1,2,3,4,5,6]}),Q=function(){function t(e){Object(p.a)(this,t);var a=new d.b(-12,4),n=new d.m({decay:2.22,preDelay:.33,wet:.11}),s=new d.f({frequency:2400,Q:.5,type:"lowpass"}),i=new d.d({lowFrequency:200,highFrequency:700,low:0,mid:-1,high:0}),r=new d.s(-1);this.sampler=new d.n(G,(function(){return e()})),this.output=new d.g(1),this.sampler.chain(s,a,n,i,r,this.output)}return Object(l.a)(t,[{key:"trigger",value:function(t,e,a){this.sampler.triggerAttackRelease(t,e,d.q(a)+d.q("32n"))}}]),t}(),T=function(){function t(e){Object(p.a)(this,t),this.setReady=e,this.loadStatus={guitar:!1,piano:!1},this.instrument={},this.output=new d.g(1),this.chords=[],this.sequence=new d.o,this.init(),this.on=!0}return Object(l.a)(t,[{key:"init",value:function(){this.guitar=new W(this.updateLoadStatus("guitar")),this.piano=new Q(this.updateLoadStatus("piano"));var t=new d.p(.67),e=new d.f(200,"highshelf");this.guitar.output.chain(e,t,this.output),this.piano.output.chain(e,t,this.output)}},{key:"updateLoadStatus",value:function(t){this.loadStatus[t]=!0;var e=!0;for(var a in this.loadStatus)e=this.loadStatus[a]&&e;this.setReady("chords",e)}},{key:"update",value:function(t){this.chords=t,this.instrument=v(.5)?this.guitar:this.piano,this.updateSequence()}},{key:"updateSequence",value:function(){var t=this;this.sequence.dispose(),this.sequence=new d.o((function(e,a){t.on&&a.chord.forEach((function(a,n){t.instrument.trigger(a,"1m",d.q(e)+d.q(.015*n))}))}),this.chords.map((function(t){return{chord:t}})),"1m").start(0),this.sequence.humanize=!0}}]),t}(),J=["Cymatics - Lofi Clap 1.wav","Cymatics - Lofi Clap 2.wav","Cymatics - Lofi Clap 3.wav","Cymatics - Lofi Clap 4.wav","Cymatics - Lofi Clap 6.wav","bubbleclap.wav","bubbleclap2.wav","clap1.wav","clapp.wav"].map((function(t){return"".concat("/lofigen-magenta","/Samples/Drums/claps/").concat(t)})),K=["Cymatics - Lofi Closed Hihat 1.wav","Cymatics - Lofi Closed Hihat 2.wav","Cymatics - Lofi Closed Hihat 3.wav","Cymatics - Lofi Closed Hihat 4.wav","Cymatics - Lofi Closed Hihat 5.wav","hat.wav","Oversampled_dd_hihat_01.wav","Oversampled_dd_hihat_02.wav","Oversampled_dd_hihat_03.wav","Oversampled_dd_hihat_04.wav","Oversampled_dd_hihat_05.wav"].map((function(t){return"".concat("/lofigen-magenta","/Samples/Drums/closed/").concat(t)})),Y=["Cymatics - Lofi Open Hihat 1.wav","Cymatics - Lofi Open Hihat 2.wav","Cymatics - Lofi Open Hihat 3.wav","Cymatics - Lofi Open Hihat 4.wav","Cymatics - Lofi Open Hihat 5.wav"].map((function(t){return"".concat("/lofigen-magenta","/Samples/Drums/open/").concat(t)})),$=["Oversampled_dd_kick_01.wav","Oversampled_dd_kick_02.wav","Oversampled_dd_kick_03.wav","Oversampled_dd_kick_04.wav","Oversampled_dd_kick_05.wav","weirdkick.wav"].map((function(t){return"".concat("/lofigen-magenta","/Samples/Drums/kicks/").concat(t)})),U=["Cymatics - Lofi Percussion 1.wav","Cymatics - Lofi Percussion 2.wav","Cymatics - Lofi Percussion 3.wav","Cymatics - Lofi Percussion 4.wav","Cymatics - Lofi Percussion 5.wav","Cymatics - Lofi Percussion 6.wav","Cymatics - Lofi Percussion 7.wav","Cymatics - Lofi Percussion 8.wav","paaaah.wav","paah.wav","pluip.wav","scrchpt.wav","scrshhrrttt.wav","scrshht.wav","tic.wav","ting.wav"].map((function(t){return"".concat("/lofigen-magenta","/Samples/Drums/percs/").concat(t)})),Z=["Cymatics - Lofi Snare 14 - A.wav","Oversampled_dd_snare_01.wav","Oversampled_dd_snare_02.wav","Oversampled_dd_snare_03.wav","Oversampled_dd_snare_04.wav","Oversampled_dd_snare_05.wav","snare.wav"].map((function(t){return"".concat("/lofigen-magenta","/Samples/Drums/snares/").concat(t)})),tt=function(t){var e={};return t.forEach((function(t,a){return e[a]=t})),e},et=new d.f({frequency:28,Q:.5,type:"highpass"}),at=new d.s(-16),nt=function(){function t(e){var a=this;Object(p.a)(this,t),this.trigger=function(t){"started"===a.players.player(a.selected).state?a.players.player(a.selected).restart(t):a.players.player(a.selected).start(t)},this.samples=tt($),this.players=new d.l(this.samples,(function(){return e()})),this.selected=0,this.output=new d.g(1),this.players.chain(et,at,this.output)}return Object(l.a)(t,[{key:"update",value:function(){this.selected=g(Object.keys(this.samples))}}]),t}(),st=new d.s(-16),it=function(){function t(e){var a=this;Object(p.a)(this,t),this.trigger=function(t){"started"===a.players.player(a.selected).state?a.players.player(a.selected).restart(t):a.players.player(a.selected).start(t)},this.samples=tt(Z),this.players=new d.l(this.samples,(function(){return e()})),this.selected=0,this.output=new d.g(1),this.players.chain(st,this.output)}return Object(l.a)(t,[{key:"update",value:function(){this.selected=g(Object.keys(this.samples))}}]),t}(),rt=new d.s(-32),ut=function(){function t(e){var a=this;Object(p.a)(this,t),this.trigger=function(t){"started"===a.players.player(a.selected).state?a.players.player(a.selected).restart(t):a.players.player(a.selected).start(t)},this.samples=tt(Y),this.players=new d.l(this.samples,(function(){return e()})),this.selected=0,this.output=new d.g(1),this.players.chain(rt,this.output)}return Object(l.a)(t,[{key:"update",value:function(){this.selected=g(Object.keys(this.samples))}}]),t}(),ot=new d.s(-36),ct=function(){function t(e){var a=this;Object(p.a)(this,t),this.trigger=function(t){"started"===a.players.player(a.selected).state?a.players.player(a.selected).restart(t):a.players.player(a.selected).start(t)},this.samples=tt(K),this.players=new d.l(this.samples,(function(){return e()})),this.selected=0,this.output=new d.g(1),this.players.chain(ot,this.output)}return Object(l.a)(t,[{key:"update",value:function(){this.selected=g(Object.keys(this.samples))}}]),t}(),ht=new d.s(-16),pt=function(){function t(e){var a=this;Object(p.a)(this,t),this.trigger=function(t){"started"===a.players.player(a.selected).state?a.players.player(a.selected).restart(t):a.players.player(a.selected).start(t)},this.samples=tt(J),this.players=new d.l(this.samples,(function(){return e()})),this.selected=0,this.output=new d.g(1),this.players.chain(ht,this.output)}return Object(l.a)(t,[{key:"update",value:function(){this.selected=g(Object.keys(this.samples))}}]),t}(),lt=new d.m({decay:1,wet:.2}),dt=new d.b(-12,4),mt=new d.s(-24),ft=function(){function t(e){var a=this;Object(p.a)(this,t),this.trigger=function(t){var e=g(Object.keys(a.samples));"stopped"===a.players.player(e).state&&a.players.player(e).restart(t)},this.samples=tt(U),this.players=new d.l(this.samples,(function(){return e()})),this.output=new d.g(1),this.players.chain(dt,lt,mt,this.output)}return Object(l.a)(t,[{key:"update",value:function(){}}]),t}(),gt=a(60),vt=new gt.MusicVAE("https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/drums_4bar_med_q2"),yt=new Map([["kick",36],["snare",38],["closed",42],["open",46]]),wt=new Map(Object(M.a)(yt).map((function(t){return t.reverse()}))),bt={open:[" "," "," "," "," "," "," "," "," "," "," "," "," "," ","X"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","X"," "],closed:["X"," ","X"," ","X"," ","X"," ","X"," ","X"," ","X"," ","X"," ","X"," ","X"," ","X"," ","X"," ","X"," ","X"," ","X"," ","X"," "],snare:[" "," "," "," ","X"," "," "," "," "," "," "," ","X"," "," "," "," "," "," "," ","X"," "," "," "," "," "," "," ","X"," "," "," "],kick:["X"," "," "," "," "," "," ","X","X"," "," "," "," "," "," "," ","X"," "," "," "," "," ","X"," "," ","X","X"," "," "," "," "," "]},kt=[];Object.keys(bt).forEach((function(t){return bt[t].forEach((function(e,a){"X"===e&&kt.push({pitch:yt.get(t),quantizedStartStep:a,quantizedEndStep:a+1})}))}));var It={notes:kt,totalQuantizedSteps:32,quantizationInfo:{stepsPerQuarter:4}},Ot=function(){function t(e,a){Object(p.a)(this,t),this.setParts=a,this.setReady=e,this.loadStatus={kicks:!1,snares:!1,open:!1,closed:!1,claps:!1,percs:!1,models:!1},this.tracks={kicks:!0,snares:!0,closed:!0,open:!0,claps:!0,percs:!0},this.output=new d.g(1),this.drumPattern=[],this.part=new d.j,this.init(),this.on=!0}return Object(l.a)(t,[{key:"init",value:function(){var t=this;vt.initialize().then((function(){return t.updateLoadStatus("models")})),this.kicks=new nt(this.updateLoadStatus("kicks")),this.snares=new it(this.updateLoadStatus("snares")),this.open=new ut(this.updateLoadStatus("open")),this.closed=new ct(this.updateLoadStatus("closed")),this.claps=new pt(this.updateLoadStatus("claps")),this.percs=new ft(this.updateLoadStatus("percs")),this.kicks.output.chain(this.output),this.snares.output.chain(this.output),this.open.output.chain(this.output),this.closed.output.chain(this.output),this.claps.output.chain(this.output),this.percs.output.chain(this.output)}},{key:"updateLoadStatus",value:function(t){this.loadStatus[t]=!0;var e=!0;for(var a in this.loadStatus)e=this.loadStatus[a]&&e;this.setReady("drums",e)}},{key:"update",value:function(){var t=Object(h.a)(c.a.mark((function t(){var e,a,n,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setParts("drums",!1),e=[],t.next=4,vt.encode([It]);case 4:return a=t.sent,t.next=7,vt.decode(a,1.2,void 0,4,80);case 7:return n=t.sent,t.next=10,vt.decode(a,1.4,void 0,4,80);case 10:s=t.sent,n[0].notes.forEach((function(t){e.push([{"16n":t.quantizedStartStep},wt.get(t.pitch)])})),s[0].notes.forEach((function(t,a){var n=t.quantizedStartStep+32;n<64&&e.push([{"16n":n},wt.get(t.pitch)])})),this.drumPattern=e,this.kicks.update(),this.snares.update(),this.open.update(),this.claps.update(),this.claps.update(),this.percs.update(),this.updatePart(),this.setParts("drums",!0);case 22:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"updatePart",value:function(){var t=this;this.part.dispose(),this.part=new d.j((function(e,a){var n=d.q(e)+d.q("32n");if(t.on){switch(a){case"kick":t.tracks.kicks&&t.kicks.trigger(n);break;case"snare":t.tracks.snares&&t.snares.trigger(n),t.tracks.claps&&t.claps.trigger(n);break;case"closed":t.tracks.closed&&t.closed.trigger(n);break;case"open":t.tracks.open&&t.open.trigger(n)}Math.random()<.2&&t.tracks.percs&&t.percs.trigger(n)}}),this.drumPattern).start(0),this.part.loop=!0,this.part.loopStart=0,this.part.loopEnd="4m",this.part.humanize=!0}}]),t}(),St=a(6),jt=new gt.MusicVAE("https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/mel_chords"),Lt=function(t,e){var a=f.scale.create(e[0].key.fullName,e[0].id),n=f.scale.create(e[1].key.fullName,e[1].id),s=t.filter((function(t){return t.quantizedStartStep<16})),i=t.filter((function(t){return t.quantizedStartStep>=16}));return Pt([].concat(Object(M.a)(Ct(s,a)),Object(M.a)(Ct(i,n))))},Ct=function(t,e){return t.map((function(t){var a=f.note.create(m.d.midiToNoteName(t.pitch));return Object(St.a)(Object(St.a)({},t),{},{pitch:m.d.toMidi(m.e.simplify(e.nearest(a.name).fullName+a.octave))})}))},Pt=function(t){return t.map((function(t){for(var e=t.pitch;e<54;)e+=12;for(;e>77;)e-=12;return Object(St.a)(Object(St.a)({},t),{},{pitch:e})}))},_t=function(){function t(e,a){Object(p.a)(this,t),this.setReady=e,this.setParts=a,this.loadStatus={guitar:!1,piano:!1},this.instrument={},this.output=new d.g(1),this.melody=[],this.part=new d.j,this.init(),this.on=!0,this.voice=0}return Object(l.a)(t,[{key:"init",value:function(){var t=this;Promise.all([jt.initialize()]).then((function(){return t.updateLoadStatus("models")})),this.guitar=new W(this.updateLoadStatus("guitar")),this.piano=new Q(this.updateLoadStatus("piano"));var e=new d.p(.33),a=new d.f(200,"highshelf");this.guitar.output.chain(a,e,this.output),this.piano.output.chain(a,e,this.output)}},{key:"updateLoadStatus",value:function(t){this.loadStatus[t]=!0;var e=!0;for(var a in this.loadStatus)e=this.loadStatus[a]&&e;this.setReady("melody",e)}},{key:"updateInstrument",value:function(){this.instrument=v(.5)?this.guitar:this.piano}},{key:"update",value:function(){var t=Object(h.a)(c.a.mark((function t(e,a,n){var s,i,r,u,o,h,p,l,d,f,g,v,y,w,b,k,I,O,S,j,L,C,P,_;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(this.setParts("melody",!1),this.updateInstrument(),s=[],i=0;i<e.length;i+=2)s.push([e[i][0],e[i+1][0]]);for(r=a.map((function(t){return t.replace("m/ma7","mM7")})),u=[],o=0;o<r.length;o+=2)u.push([r[o],r[o+1]]);return h=u[0],p=1===n[1]?u[4]:u[8],l=u[12],d=[h,p,l],f=n.map((function(t){return[t,t,t,t]})).reduce((function(t,e){return t.concat(e)}),[]).map((function(t){return d[t]})),t.next=14,jt.sample(1,.9,{chordProgression:h},4,80);case 14:return g=t.sent,t.next=17,jt.sample(1,.9,{chordProgression:p},4,80);case 17:return v=t.sent,t.next=20,jt.sample(1,.9,{chordProgression:l},4,80);case 20:y=t.sent,w=[g,v,y],b=n.map((function(t){return[t,t,t,t]})).reduce((function(t,e){return t.concat(e)}),[]).map((function(t){return w[t][0]})),k=[],I=0;case 25:if(!(I<u.length)){t.next=39;break}return O=b[I],S=f[I],t.next=30,jt.encode([O],{chordProgression:S});case 30:return j=t.sent,t.next=33,jt.decode(j,.6,{chordProgression:u[I]},4,80);case 33:L=t.sent[0],C=Lt(L.notes,s[I]),k.push(Object(St.a)(Object(St.a)({},L),{},{notes:C}));case 36:I++,t.next=25;break;case 39:P=gt.sequences.concatenate(k),c=P.notes,_=c.map((function(t){return{time:{"16n":t.quantizedStartStep},note:m.d.midiToNoteName(t.pitch),duration:{"16n":t.quantizedEndStep-t.quantizedStartStep}}})),this.melody=_,this.updatePart(),this.setParts("melody",!0);case 44:case"end":return t.stop()}var c}),t,this)})));return function(e,a,n){return t.apply(this,arguments)}}()},{key:"updatePart",value:function(){var t=this;this.part.dispose(),this.part=new d.j((function(e,a){if(t.on)switch(t.voice){case 0:t.instrument.trigger(a.note,"1n",e);break;case 1:t.instrument.trigger(m.e.transpose(a.note,"8P"),"1n",e);break;case 2:t.instrument.trigger(a.note,"1n",e),t.instrument.trigger(m.e.transpose(a.note,"8P"),"1n",e)}}),this.melody).start(0),this.part.loop=!0,this.part.loopStart=0,this.part.loopEnd="32m",this.part.humanize=!0}}]),t}(),qt="".concat("/lofigen-magenta","/Samples/Vinyl.wav"),Et=new d.s(-12),Vt=function t(e){var a=this;Object(p.a)(this,t),this.start=function(){a.player.start(0)},this.stop=function(){a.player.stop()},this.player=new d.k(qt,(function(){return e("vinyl",!0)})),this.player.loop=!0,this.output=new d.g(1),this.player.chain(Et,this.output)};d.c.lookAhead=.5,d.r.bpm.value=80;var Xt=new d.f(28,"highpass"),Nt=new d.f(6400,"lowpass"),xt=new d.d({lowFrequency:400,highFrequency:1600,low:-1,mid:1,high:-1}),At=function(){function t(e,a){var n=this;Object(p.a)(this,t),this.pg=new E,this.setInstrumentsReady=e,this.setPartsReady=a,this.instrumentsLoaded=!1,this.partsLoaded=!1,this.instrumentLoadStatus={chords:!1,melody:!1,drums:!1,vinyl:!1},this.partLoadStatus={drums:!1,melody:!1},this.updateInstrumentLoadStatus=function(t,e){n.instrumentLoadStatus[t]=e;var a=!0;for(var s in n.instrumentLoadStatus)a=a&&n.instrumentLoadStatus[s];n.instrumentsLoaded=a,n.instrumentsLoaded&&(n.chainControllerOutputs(),n.setInstrumentsReady(!0))},this.updatePartLoadStatus=function(t,e){n.partLoadStatus[t]=e;var a=!0;for(var s in n.partLoadStatus)a=a&&n.partLoadStatus[s];n.partsLoaded=a,n.setPartsReady(n.partsLoaded)},this.output=new d.g(1).chain(xt,Xt,Nt),this.output.toDestination(),this.bc=new D,this.cc=new T(this.updateInstrumentLoadStatus),this.dc=new Ot(this.updateInstrumentLoadStatus,this.updatePartLoadStatus),this.mc=new _t(this.updateInstrumentLoadStatus,this.updatePartLoadStatus),this.vinyl=new Vt(this.updateInstrumentLoadStatus),this.loop=new d.h((function(t){n.bc.on=v(.7),n.cc.on=!0,n.dc.on=v(.85),n.mc.on=v(.85),n.mc.voice=g([0,1,2]),n.mc.updateInstrument()}),"8m").start(0)}return Object(l.a)(t,[{key:"chainControllerOutputs",value:function(){this.bc.output.chain(this.output),this.cc.output.chain(this.output),this.dc.output.chain(this.output),this.mc.output.chain(this.output),this.vinyl.output.chain(this.output)}},{key:"generateSong",value:function(){var t=Object(h.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.pg.generateProgression(),this.bc.update(this.pg.getRootsAndFifths(1)),this.cc.update(this.pg.getShellVoicings(3,!0)),t.next=5,Promise.all([this.dc.update(),this.mc.update(this.pg.getChordScales(),this.pg.chords,this.pg.form)]);case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"play",value:function(){d.t(),this.vinyl.start(),d.r.start()}},{key:"stop",value:function(){this.vinyl.stop(),d.r.stop()}}]),t}(),Mt=new d.e(16),Rt=function(t){var e=Object(n.useState)(Object(M.a)(Mt.getValue())),a=Object(u.a)(e,2),i=a[0],r=a[1],o=Object(n.useRef)(),c=function t(){r(Object(M.a)(Mt.getValue())),o.current=requestAnimationFrame(t)};return Object(n.useEffect)((function(){return t.audio.connect(Mt),o.current=requestAnimationFrame(c),function(){return cancelAnimationFrame(o.current)}})),s.a.createElement("div",{className:"freqList"},i.map((function(t,e){var a=Math.max(5.2*(52+.52*t),10);return s.a.createElement("div",{key:e,className:"freqBar",style:{height:"".concat(a,"px")}})})))};var zt=function(){var t=Object(n.useState)(!1),e=Object(u.a)(t,2),a=e[0],i=e[1],r=Object(n.useState)(!1),o=Object(u.a)(r,2),c=o[0],h=o[1],p=Object(n.useState)(!1),l=Object(u.a)(p,2),d=l[0],m=l[1],f=Object(n.useState)(!1),g=Object(u.a)(f,2),v=g[0],y=g[1],w=Object(n.useState)(!1),b=Object(u.a)(w,2),k=b[0],I=b[1];Object(n.useEffect)((function(){m(a&&c)}),[a,c]);var O=Object(n.useRef)(null);return Object(n.useEffect)((function(){O.current=new At(i,h)}),[]),s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"header"},s.a.createElement("h1",null,"LOFI GENERATOR"),s.a.createElement("h3",null,"by vin-huynh")),s.a.createElement("div",{className:"colorBox"},s.a.createElement("div",{className:"loadInfo"},d?"":k?"LOADING":s.a.createElement("p",{className:"generateFirst"},"Click ",s.a.createElement("b",null,">>")," to Generate Your First Song!")),s.a.createElement("div",{className:"visualizer"},d?s.a.createElement(Rt,{audio:O.current.output}):""),s.a.createElement("div",{className:"gradient"})),s.a.createElement("div",{className:"buttons"},s.a.createElement("button",{className:"playBtn",disabled:!d,onClick:function(){return v?O.current.stop():O.current.play(),void y(!v)}},s.a.createElement("b",null,v?"Stop":"Play")),s.a.createElement("button",{className:"nextBtn",disabled:!d&&k,onClick:function(){I(!0),O.current.stop(),y(!1),O.current.generateSong(),m(!1)}},s.a.createElement("b",null,">>"))),s.a.createElement("div",{className:"instructions"},s.a.createElement("p",null,"Click ",s.a.createElement("b",null,">>")," to generate a new song!"),s.a.createElement("p",null,"It may take a while, please be patient!")),s.a.createElement("section",{className:"backdrop"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(812);r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(zt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[745,1,2]]]);
//# sourceMappingURL=main.e46e2015.chunk.js.map