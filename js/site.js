// the map
var map = L.map('map', {
	center: [37.98242, 23.72560],
	zoom: 14,
	fullscreenControl: true,
	fullscreenControlOptions: {
		position: 'topleft'
	}
});

L.map.accessToken = 'pk.eyJ1IjoiaW5ub3ZlbGxhayIsImEiOiJjTm83NXJJIn0.4GLn14YMdOWUaAClnknGnw';

// add the title and draw the map
L.tileLayer('https://{s}.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + L.map.accessToken, {
//		https://a.tiles.mapbox.com/v4/innovellak.lacbdh3o/page.html?access_token=pk.eyJ1IjoiaW5ub3ZlbGxhayIsImEiOiJjTm83NXJJIn0.4GLn14YMdOWUaAClnknGnw#4/39.00/22.00
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org" target="_blank">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com" target="_blank">Mapbox</a>',
	id: 'innovellak.lacbdh3o'
}).addTo(map);

var infobox = L.control();

infobox.onAdd = function (map) {
	this._div = L.DomUtil.create('div', 'infobox');
	this.update();
	return this._div;
};

infobox.update = function (props) {
	this._div.innerHTML = '<h4>Innovathens Map</h4>' +
		'<p>Μετακινηθείτε στο χάρτη<br />για να δείτε όλα τα points.</p>'
};
infobox.addTo(map);

// the LeafIcon common class
/*
var LeafIcon = L.Icon.extend({
	options: {
		shadowUrl: '',
		iconSize: [, ],
		shadowSize: [, ]
	}
});
*/

// icon classes for different types of markers
/*
var hubIcon = new LeafIcon({
	iconUrl: '',
	className = 'icon-hub'
});
*/
var InnovIcon = L.icon({
	iconUrl: 'icons/lamp.png',
	iconSize: [24, 35],
	popupAnchor: [0, -3]
});

// add markers and popups for the hubs; ugly hack but works wihout webserver
var hub1 = L.marker([37.97384, 23.69542]).addTo(map);
hub1.bindPopup('<h1><a href="http://www.iqbility.com" target="blank">Iqbility</a></h1><h2>Αλ. Πάντου 25, Καλλιθέα</h2><p>Iqbility\'s Goal is to identify, incubate and accelerate the development of the highest-potential startups in Greece, through high quality mentorship, valued leadership, experiential education and corporate resources.Their Focus is exclusively on the ICT (Information Communications Technology) industry, meaning consumer internet, enterprise software, mobile applications, big data, cloud services e.t.c.</p>').addTo(map);

var hub2 = L.marker([37.97491, 23.71134]).addTo(map);
hub2.bindPopup('<h1><a href="http://www.thefoundation.gr" target="blank">Found.ation</a></h1><h2>Ευρυσθέως 2 – Πειραιώς 123, Κ. Πετράλωνα</h2><p>Το Found.ation αποτελεί έναν δυναμικό ελληνικό επιχειρηματικό φορέα για τη φιλοξενία και εκκόλαψη νεοφυών εταιριών. Διαθέτει έναν πλήρως εξοπλισμένο, υψηλής αισθητικής, συνεργατικό χώρο εργασίας, εξειδικευμένων υπηρεσιών και υποδομών για τεχνολογικά startups, που παρέχει ολοκληρωμένη υποστήριξη σε θέματα σχετικά με την τεχνολογία, τη γραφιστική, την επιχειρηματικότητα.</p>').addTo(map);

var hub3 = L.marker([37.94035, 23.6960]).addTo(map);
hub3.bindPopup('<h1><a href="http://www.theegg.gr/pages/the_egg" target="blank">Egg</a></h1><h2>Λ. Συγγρού 190, Καλλιθέα</h2><p>Το &laquo;egg - enter&#8226;grow&#8226;go&raquo; είναι μια πρωτοβουλία  Eταιρικής Kοινωνικής Eυθύνης της Eurobank την οποία σχεδίασε και υλοποιεί με το Corallia με στόχο τη δημιουργία ενός ευνοϊκού περιβάλλοντος για την τόνωση της νεανικής καινοτομικής επιχειρηματικότητας.<br />Tο Πρόγραμμα &laquo;egg - enter&#8226;grow&#8226;go&raquo; αποτελεί ένα ολοκληρωμένο πλαίσιο επιχειρηματικής επώασης (incubation), επιτάχυνσης (acceleration) και συνεργασίας (co-working).</p>').addTo(map);

var hub4 = L.marker([38.0454, 23.7740]).addTo(map);
hub4.bindPopup('<h1><a href="http://www.microsoftinnovationcenters.com/" target="blank">Microsoft Innovation Center Greece</a></h1><h2>Λ. Κηφισίας 221</h2>').addTo(map);

var hub5 = L.marker([37.98659, 23.73021]).addTo(map);
hub5.bindPopup('<h1><a href="https://www.fablabs.io/fablabathens" target="blank">fablabAthens</a></h1><h2>Πατησίων 32 , ΕΜΠ</h2>').addTo(map);

var hub6 = L.marker([38.04529, 23.80817]).addTo(map);
hub6.bindPopup('<h1><a href="http://www.corallia.org" target="blank">Corralia</a></h1><h2>Σωρού 12, Μαρούσι</h2><p>Αποστολή του Corallia είναι να στηρίξει και να λειτουργήσει καταλυτικά στην ανάπτυξη συνεκτικών, παραγωγικών και καινοτομικών οικοσυστημάτων μέσα στα οποία δραστηριοποιούνται συντονισμένα φορείς, σε συγκεκριμένους τομείς και περιφέρειες της χώρας, όπου προϋπάρχει ανταγωνιστικό πλεονέκτημα και εξαγωγικός προσανατολισμός.</p>').addTo(map);

var hub7 = L.marker([37.97770, 23.72392]).addTo(map);
hub7.bindPopup('<h1><a href="http://athens.impacthub.net/" target="blank">Impact Hub Athens</a></h1><h2>Καραϊσκάκη 28 Ψυρρή</h2><p>Το Impact Hub Athens είναι ένα μέρος που εμπνέει και φέρνει κοντά ανθρώπους, που μπορούν να φέρουν την αλλαγή μέσα από υπεύθυνες και βιώσιμες πρωτοβουλίες.Εργαστήριο καινοτομίας, θερμοκοιτίδα επιχειρηματικότητας, κοινότητα, το Impact Hub προσφέρει στα μέλη του ένα  οικοσύστημα με  δυνατότητες συνεργασίας. Με βάση την επιχειρηματικότητα στοχεύει σε πρωτοποριακές ενέργειες, οι οποίες έχουν άμεσα αντίκτυπο στο κοινωνικό σύνολο.</p><h1><a href="http://www.loft2work.gr" target="blank">Loft2Work</a></h1><h2>Καραϊσκάκη 28, Ψυρρή</h2><p>To Loft2work έχει ως αντικείμενο τη βιώσιμη ανάπτυξη. Δημιουργώντας μια  κοινωνική επιχείρηση (σε συνεργασία με το Impact Hub), παρέχει τα εργαλεία για την ανάπτυξη των κοινωνικών οργανισμών  εστιάζοντας κυρίως στις αστικές κοινότητες και στις ανάγκες και προκλήσεις των νέων.</p>').addTo(map);

var hub8 = L.marker([37.98537, 23.73208]).addTo(map);
hub8.bindPopup('<h1><a href="http://thecube.gr/" target="blank">The Cube</a></h1><h2>Κλεισόβης 8, Αθήνα</h2><p>A new startup cluster and innovation space in the heart of the city, hosting the best of Athens’ innεovators in the technology and making space. Bolstered by its core management team, its partnerships with technology training institutes, an investment fund, technology user groups and the maker movement, The Cube will stand out as a hub of innovation and ‘the place’ to be or hang out for the doers of our city.</p>').addTo(map);

var hub9 = L.marker([37.97110, 23.70217]).addTo(map);
hub9.bindPopup('<h1><a href="http://www.thehubevents.gr" target="blank">Hub events</a></h1><h2>Πειραιώς 113 & Ακμήνης 12</h2><p>To The Hub Events στεγάζεται σε ένα μεγάλο βιομηχανικό χώρο που χάρη στην ευέλικτη υποδομή του φιλοξενεί επαγγελματικά συνέδρια, κοινωνικές και πολιτιστικές εκδηλώσεις, εναλλακτικά events και καλλιτεχνικά δρώμενα.</p>').addTo(map);

var hub10 = L.marker([37.97063, 23.74034]).addTo(map);
hub10.bindPopup('<h1><a href="http://www.orangegrove.biz" target="blank">Orange Grove</a></h1><h2>Λεωφόρος Βασιλέως Κωνσταντίνου 5, Αθήνα</h2><p>Το Orange Grove είναι ένας νέος χώρος εργασίας, δικτύωσης και υποστήριξης Ελλήνων και Ολλανδών επιχειρηματιών έως 35 ετών, αλλά και Ελλήνων αποφοίτων πανεπιστημίων που θέλουν να ξεκινήσουν την δική τους επιχείρηση στην Ελλάδα.Η πρωτοβουλία ανήκει στην Ολλανδική πρεσβεία αλλά έχει συγκεντρώσει την υποστήριξη ενός ευρέος δικτύου ελληνικών, ολλανδικών εταιρειών, πανεπιστημίων και φορέων.</p>').addTo(map);

var hub11 = L.marker([37.97770, 23.72626]).addTo(map);
hub11.bindPopup('<h1><a href="http://www.workingland.gr/" target="blank">Working Land</a></h1><h2>Αθηνάς 12, Μοναστηράκι</h2><p>Το Working Land είναι ένας συνεργατικός χώρος, μια καινοτόμος υπηρεσία, αποκύημα της παγκόσμιας οικονομικής κρίσης, που εδρεύει στην καρδιά της Αθήνας. Απευθύνεται σε start-up επιχειρήσεις, ελεύθερους επαγγελματίες και ολιγομελείς εταιρείες, παρέχοντας ένα εργασιακό περιβάλλον, πλήρως εξοπλισμένο και προσαρμοσμένο στις ανάγκες του κάθε επαγγελματία.</p>').addTo(map);

var hub12 = L.marker([37.97481, 23.70810]).addTo(map);
hub12.bindPopup('<h1><a href="http://www.tzaferi16.gr" target="blank">Tzaferi16</a></h1><h2>Τζαφέρη 16, 11854 Γκάζι</h2><p>Αποτελεί ένα coworking space, έκφραση της σύγχρονης τάσης για πολυσυλλεκτικούς χώρους εργασίας, συναντήσεων και εκδηλώσεων.</p>').addTo(map);

var hub13 = L.marker([37.97479, 23.70960]).addTo(map);
hub13.bindPopup('<h1><a href="http://123p.gr/home" target="blank">123p</a></h1><h2>Πειραιώς 123, Κ. Πετράλωνα</h2><p>Το 123p αποτελεί έναν συνεργατικό χώρο με εξοπλισμένα γραφεία και αίθουσες συνεδριάσεων.</p>').addTo(map);

var hub14 = L.marker([37.98242, 23.72560]).addTo(map);
hub14.bindPopup('<h1><a href="http://www.romantso.gr" target="blank">ΡΟΜΑΝΤΣΟ</a></h1><h2>Αναξαγόρα 3-5, Ομόνοια</h2><p>Το Ρομάντσο, το πρώην κτίριο γραφείων – τυπογραφείων του ομώνυμου εντύπου, βρίσκεται στο ιστορικό εμπορικό κέντρο της Αθήνας και αποτελείται ταυτόχρονα από μια θερμοκοιτίδα – χώρους γραφείων δραστηριοποίησης νέων επιχειρήσεων του δημιουργικού χώρου και ένα πολιτιστικό κέντρο, ανοιχτό στο κοινό, με καθημερινό πρόγραμμα εκδηλώσεων.</p>').addTo(map);

var hub15 = L.marker([37.9823149, 23.7560635]).addTo(map);
hub15.bindPopup('<h1><a href="http://www.aephoria.net/" target="blank">Aephoria.net</a></h1><h2>Δορυλαίου 12, πλ. Μαβίλη</h2><p>Aephoria.net is a business incubation program for startup companies operating in Greece. Our goal is to support great ideas and get them through the tough early stages, so that entrepreneurs can transform their dreams into good business with a positive economic, environmental, and social impact.</p>').addTo(map);

var hub16 = L.marker([37.723191, 24.048236]).addTo(map);
hub16.bindPopup('<h1><a href="http://www.incubator.gr/general.html" target="blank">Θερμοκοιτίδα BIC Αττικής</a></h1><h2>Τεχνολογικό και Πολιτιστικό Πάρκο Λαυρίου</h2><p>Με την ίδρυση και λειτουργία της Θερμοκοιτίδας στο Τεχνολογικό και Πολιτιστικό Πάρκο Λαυρίου, το BIC Αττικής κεφαλαιοποιεί την πολύχρονη εμπειρία του στο χώρο της υποστήριξης των ΜΜΕ, ενεργοποιώντας και αξιοποιώντας ένα δίκτυο συνεργατών στην Ελλάδα και το εξωτερικό (επιχειρήσεις, τράπεζες, πανεπιστήμια, ερευνητικά κέντρα, ευρωπαϊκό δίκτυο BIC, θερμοκοιτίδες κα).<br />Η Θερμοκοιτίδα επιχειρήσεων του BIC Αττικής απευθύνεται σε νέους επιχειρηματίες και υφιστάμενες επιχειρήσεις,που σκοπό έχουν την εμπορική εκμετάλλευση μιας καινοτομίας. Στόχος είναι η υποστήριξη επιχειρηματιών με γνώμονα γνώση του αντικειμένου στο οποίο επιθυμούν να δραστηριοποιηθούν ανεξάρτητα από το αν έχουν προηγούμενη επιχειρηματική εμπειρία (π.χ. ερευνητές, εργαζόμενοι σε συναφές αντικείμενο κα).</p>').addTo(map);

var hub17 = L.marker([38.0169457, 23.7312673]).addTo(map);
hub17.bindPopup('<h1><a href="https://www.hackerspace.gr/" target="blank">Hackerspace.gr [HSGR]</a></h1><h2>Αμπατιέλλου 11 Αθήνα</h2><p>Το Hackerspace.gr [HSGR] είναι ένας χώρος αφιερωμένος στο δημιουργικό hacking κώδικα και κατασκευών, στην Αθήνα.</p>').addTo(map);

var hub18 = L.marker([37.9756227, 23.7307762]).addTo(map);
hub18.bindPopup('<h1><a href="http://colabworkspace.com/" target="blank">coLab</a></h1><h2>Petraki 28 Athens</h2>').addTo(map);

var hub19 = L.marker([37.9978031, 23.7681666]).addTo(map);
hub19.bindPopup('<h1><a href="http://www.ecinisi.gr" target="blank">e-cinisi</a></h1><h2>Μπάκου 1, Νέα Φιλοθέη,Αθήνα 115 24</h2><p>Στα Κέντρα Eπιχειρηματικότητας και Καινοτομίας της ecίnιsι παρέχεται η δυνατότητα χρήσης πλήρως εξοπλισμένων, σύγχρονων γραφειακών χώρων σε κομβικές τοποθεσίες στη Λεωφ. Κηφισίας και στο κέντρο της Αθήνας, με άρτιες υποδομές, μηδενικά έξοδα εγκατάστασης και σταθερό ενιαίο κόστος. Παράλληλα στην ecίnιsι προσφέρονται συμβουλευτικές υπηρεσίες mentoring και coaching από ειδικούς, πιστοποιημένους management mentors, με σταθερό μηνιαίο κόστος και ειδικές εκπτώσεις για νέους επιχειρηματίες. Στόχος της ecίnιsι είναι να αποτελεί one-stop shop με άριστη σχέση ποιότητας-κόστους για όλες τις υποστηρικτικές υπηρεσίες που έχει ανάγκη για τη λειτουργία της μια επιχείρηση, όπως software development, web presence, social media campaigns, google AdWords campaigns, mobile apps, γραφιστικές εργασίες, λογιστικές υπηρεσίες, νομικά, γραμματειακή υποστήριξη, 24/7 τηλεφωνικό κέντρο και πολλά άλλα. H ecίnιsι φιλοδοξεί να αποτελεί το ιδανικό σημείο φιλοξενίας επιχειρηματιών σε έναν χώρο όπου μπορούν να ανταλλάσσουν και να αναπτύσσουν τις ιδέες τους και τις υπηρεσίες που προσφέρουν, σε συνεργασία με άλλους επαγγελματίες που δραστηριοποιούνται σε σχετικά αντικείμενα.</p>').addTo(map);

var hub20 = L.marker([37.9824074, 23.7070563]).addTo(map);
hub20.bindPopup('<h1><a href="http://www.techtransfer.aua.gr/" target="blank">&laquo;Καινοτομία και Επιχειρηματικότητα – Αξιοποίηση της Έρευνας στο Γεωπονικό Πανεπιστήμιο Αθηνών&raquo;</a></h1><h2>Γεωπονικό Πανεπιστήμιο Αθηνών<br />Ιερά Οδός 75</h2><p>Το Έργο &laquo;Καινοτομία και Επιχειρηματικότητα – Αξιοποίηση της Έρευνας στο Γεωπονικό Πανεπιστήμιο Αθηνών&raquo; αποσκοπεί στην αξιοποίηση των αποτελεσμάτων της ερευνητικής δραστηριότητας στο ΓΠΑ έτσι ώστε να μεγιστοποιηθούν τα οφέλη για το ίδιο το Πανεπιστήμιο, την περιοχή στην οποία εδρεύει δηλαδή το Δήμο Αθηναίων, την περιφέρεια και, γενικότερα την ελληνική κοινωνία και οικονομία.<br />Το έργο περιλαμβάνει τα στάδια της συστηματικής καταγραφής της υφιστάμενης ερευνητικής δραστηριότητας, της ανάδειξης της έρευνας σε όλα τα επιστημονικά πεδία που θεραπεύονται στο ΓΠΑ με την μορφή ολοκληρωμένων ερευνητικών προϊόντων ή / και διαδικασιών και μεθόδων παραγωγής, και της τεκμηριωμένης διερεύνησης της δυνατότητας εμπορικής της αξιοποίησης.</p><h1><a href="http://www.moke.aua.gr" target="blank">Γεωπονικό Πανεπιστήμιο Αθηνών</a></h1><h2>Ιερά Οδός 75</h2><p>Η Μονάδα Καινοτομίας και Επιχειρηματικότητας (MO.K.E.) δημιουργήθηκε στο πλαίσιο του Επιχειρησιακού Προγράμματος &laquo;Εκπαίδευση & Δια Βίου Μάθηση ΕΣΠΑ 2007-2013&raquo; και συγχρηματοδοτείται από την Ευρωπαϊκή Ένωση και από εθνικούς πόρους.<br />Η ΜO.K.E. του Γ.Π.Α. έχει στόχο την υποστήριξη της επιχειρηματικότητας των φοιτητών, στην ανάπτυξη του επιχειρηματικού πνεύματος, των δεξιοτήτων διαχείρισης διαδικασιών οργάνωσης, και της εξοικείωσης των φοιτητών σε θέματα ανάπτυξης επιχειρήσεων, προώθηση καινοτομίας και έρευνας και τεχνολογίας.</p>').addTo(map);

var hub21 = L.marker([37.9775535, 23.7760393]).addTo(map);
hub21.bindPopup('<h1><a href="http://www.iccs.gr/" target="blank">Δομή Διασύνδεσης Έρευνας και Επιχειρηματικότητας ΕΠΙΣΕΥ – ΕΜΠ</a></h1><h2>Ηρώων Πολυτεχνείου 9, Πολυτεχνειούπολη Ζωγράφου</h2><p>Η Δομή Διασύνδεσης Έρευνας και Επιχειρηματικότητας ΕΠΙΣΕΥ – ΕΜΠ απευθύνεται σε ένα ευρύ φάσμα ωφελουμένων: νέοι ερευνητές, υποψήφιοι διδάκτορες, διδάκτορες που έχουν καταλήξει σε δυνητικά εμπορικά αξιοποιήσιμα ερευνητικά αποτελέσματα, έχουν δημιουργικές ιδέες και επιθυμούν να τις μετατρέψουν σε βιώσιμες επιχειρήσεις ή προϊόντα, αλλά και υπό σύσταση επιχειρήσεις που θέλουν να επιχειρήσουν σε δυναμικούς τομείς της ελληνικής οικονομίας ή/και νέες επιχειρήσεις που επιθυμούν να μετασχηματίσουν το επιχειρηματικό τους μοντέλο μέσω αξιοποίησης ερευνητικών αποτελεσμάτων.</p><h1><a href="http://www.mke.ntua.gr" target="blank">ΕΘΝΙΚΟ ΜΕΤΣΟΒΙΟ ΠΟΛΥΤΕΧΝΕΙΟ</a></h1><h2>Ηρώων Πολυτεχνείου 9, Πολυτεχνειούπολη Ζωγράφου</h2><p>Η Μονάδα Καινοτομίας και Επιχειρηματικότητας του Εθνικού Μετσoβίου Πολυτεχνείου (ΜοΚΕ Ε.Μ.Π.) ιδρύθηκε στο πλαίσιο λειτουργίας του ΔΑΣΤΑ ΕΜΠ και χρηματοδοτείται από το ΕΣΠΑ. Για την εκπλήρωση του στόχου της η ΜοΚΕ ΕΜΠ οργανώνει τις δράσεις της σε 3 άξονες: Συμβουλευτικό, εκπαιδευτικό και ερευνητικό.</p>').addTo(map);

var hub22 = L.marker([37.9900961, 23.7283711]).addTo(map);
hub22.bindPopup('<h1><a href="http://www.imegsevee.gr/" target="blank">Συμβουλευτική υποστήριξη μικρομεσαίων επιχειρήσεων στο Δήμο Αθηναίων - ΙΜΕ ΓΣΕΒΕΕ</a></h1><h2>Αριστοτέλους 46 Αθήνα</h2><p>Το έργο &laquo;Συμβουλευτική υποστήριξη μικρομεσαίων επιχειρήσεων στο Δήμο Αθηναίων σε θέματα επιχειρηματικότητας και συνεργασιών με σκοπό την ενίσχυση της καινοτομίας και της ανταγωνιστικότητας&raquo; αφορά στη διαμόρφωση ενός ολοκληρωμένου μηχανισμού υποστήριξης μικρομεσαίων επιχειρήσεων, που έχουν την έδρα τους στο Δήμο Αθηναίων.</p>').addTo(map);

var hub23 = L.marker([37.9778454, 23.7318395]).addTo(map);
hub23.bindPopup('<h1><a href="http://ekinisilab-sev.gr/" target="blank">Βιώσιμη Επιχειρηματικότητα στην Αθήνα - ΣΕΒ  (EkinisiLab)</a></h1><h2>Καρύτση 5, Αθήνα</h2><p>Ο ΣΕΒ αξιοποιώντας τη συσσωρευμένη εμπειρία και τεχνογνωσία αλλά και τη γνώση της αγοράς, αναλαμβάνει τη δημιουργία οργανωμένου περιβάλλοντος στήριξης της νέας καινοτόμου επιχειρηματικότητας στο μητροπολιτικό Δήμο της Αθήνας.<br />Με το έργο &laquo;Βιώσιμη Επιχειρηματικότητα στην Αθήνα&raquo; εξοπλίζει μελλοντικούς και νέους επιχειρηματίες με γνώσεις και δεξιότητες και τους βοηθά να διαμορφώσουν το επιχειρηματικό τους μοντέλο, να μελετήσουν την αγορά στην οποία απευθύνονται, να αξιολογήσουν τη βιωσιμότητα της επιχειρηματικής τους ιδέας και να δικτυωθούν με επιχειρήσεις και χρηματοπιστωτικούς οργανισμούς, έτσι ώστε να δημιουργήσουν επιχειρήσεις με προοπτική και μέλλον.</p>').addTo(map);

var hub24 = L.marker([37.97865, 23.713274], {icon: InnovIcon}).addTo(map);
hub24.bindPopup('<h1><a href="http://www.innovathens.gr/" target="blank">Κόμβος Καινοτομίας και Επιχειρηματικότητας INNOVATHENS</a></h1><h2>Πειραιώς 100 Γκάζι</h2><p>Tο INNOVATHENS είναι ένας ολοκληρωμένος κόμβος στήριξης της Καινοτομίας και της Επιχειρηματικότητας στην Τεχνόπολη του Δήμου Αθηναίων.Στο INNOVATHENS μπορείς να ωριμάσεις την επιχειρηματική σου ιδέα και να αναπτύξεις ή να μετασχηματίσεις την επιχείρησή σου, έχοντας δωρεάν πρόσβαση σε εξειδικευμένη τεχνογνωσία, πληροφορίες και συμβουλές στα πεδία του ενδιαφέροντός σου.</p>',
	{className: 'innovathens-popup'}).openPopup();

var hub25 = L.marker([37.9990272, 23.7337056]).addTo(map);
hub25.bindPopup('<h1><a href="http://www.theathensincube.gr/" target="blank">Θ.Ε.Α.</a></h1><h2>Κεφαλληνίας 45, Αθήνα</h2><p>Το έργο &laquo;Θερμοκοιτίδα Υποστήριξης Νεοφυών Επιχειρήσεων στο Δήμο Αθηναίων&raquo; (Θ.Ε.Α.) αποτελεί μία από τις σημαντικότερες πρωτοβουλίες του Ε.Β.Ε.Α. για την οικονομική και κοινωνική ανάκαμψη του μητροπολιτικού δήμου της Αθήνας, καθώς η στήριξη νέων επιχειρηματιών αποτελεί τη βάση για την αναγέννηση της επιχειρηματικότητας.<br />Υλοποιείται από το Εμπορικό και Βιομηχανικό Επιμελητήριο Αθηνών και εντάσσεται στο χρηματοδοτούμενο από το ΕΣΠΑ πλαίσιο του αναπτυξιακού προγράμματος &laquo;Έργο Αθήνα&raquo; του Δήμου Αθηναίων.</p>').addTo(map);

var hub26 = L.marker([37.9936319, 23.731912]).addTo(map);
hub26.bindPopup('<h1><a href="http://www.acein.aueb.gr/" target="blank">Κέντρο Στήριξης Επιχειρηματικότητας και Καινοτομίας του Οικονομικού Πανεπιστημίου Αθηνών - ACEin</a></h1><h2>Κτίριο ΜΟΚΕ ΟΠΑ, Ελπίδος 13</h2><p>Το Κέντρο Στήριξης Επιχειρηματικότητας και Καινοτομίας (Athens Center of Entrepreneurship and Innovation - ACEin) του Οικονομικού Πανεπιστημίου Αθηνών υποστηρίζει καινοτόμες νέες ή υπό σύσταση βιώσιμες επιχειρήσεις καθώς και ερευνητικά αποτελέσματα με στόχο τη σωστή αξιοποίηση, λειτουργία και ανάπτυξή τους.</p>').addTo(map);

var hub27 = L.marker([37.9819821, 23.7315266]).addTo(map);
hub27.bindPopup('<h1><a href="http://www.eea.gr" target="blank">Συνεργατικά δίκτυα ανοιχτής καινοτομίας COIN</a></h1><h2>Ελ. Βενιζέλου 44 &amp; Χαρ. Τρικούπη</h2><p>Αντικείμενο των &laquo;Συνεργατικών δικτύων ανοιχτής καινοτομίας&raquo; είναι η διαγνωστική ανάλυση και σχεδιασμός υλοποίησης παρεμβάσεων, η ανάπτυξη εργαλείων και η εκπαίδευση στελεχών για την υλοποίηση των παρεμβάσεων σε επιχειρήσεις του Δήμου Αθηναίων.<br />Το Επαγγελματικό Επιμελητήριο Αθηνών που θα διεκπεραιώσει το έργο, θα ενισχύσει μικρομεσαίες επιχειρήσεις του Δήμου, ώστε να βελτιώσουν τον τρόπο λειτουργίας τους καινοτομώντας και βελτιώνοντας την ανταγωνιστικότητά τους.</p>').addTo(map);

var hub28 = L.marker([38.0916925, 23.7938797]).addTo(map);
hub28.bindPopup('<h1><a href="http://www.iforu.gr" target="blank">iforU</a></h1><h2>Δήμητρος 20, Κηφισία</h2><p>Το &laquo;iforU Greek Mentoring Network&raquo; ενισχύει τη γυναικεία επιχειρηματικότητα. Βασικοί στόχοι:<ol><li>Η ενίσχυση, υποστήριξη, δικτύωση και προώθηση των νέων γυναικών-επιχειρηματιών, μέσα απ\' την έρευνα και την πληροφόρηση, έτσι ώστε να μπορούν να πετύχουν τους επιχειρηματικούς τους στόχους.</li><li>Η έρευνα και μελέτη όλων των θεμάτων που άπτονται του γυναικείου επιχειρείν (από τη δημιουργία μιας επιχείρησης και τη χρηματοδότησή της μέχρι την εκπαίδευση, τη συμβουλευτική και τη δικτύωση σε όλα τα επίπεδα).</li><li>Να παρέχουμε συμβουλές και ηθική υποστήριξη στις γυναίκες-επιχειρηματίες.</li></ol></p>').addTo(map);

var hub29 = L.marker([38.0299043, 23.816219]).addTo(map);
hub29.bindPopup('<h1><a href="http://www.kinno.eu" target="blank">ΚiΝΝΟ Consultants</a></h1><h2>Λ.Πεντέλης 104 &amp; Μεταμορφώσεως 1</h2><p>KiNNO offers innovative and customized intermediary services to all its Partners involved in the knowledge value chain: Researchers & Research and Technology Organisations (RTOs), Entrepreneurs & Start Ups, Private Companies, Business Support Organisations, Investors, Public Sector</p>').addTo(map);

var hub30 = L.marker([37.9769361, 23.7340031]).addTo(map);
hub30.bindPopup('<h1><a href="http://www.moke.uoa.gr" target="blank">ΕΘΝΙΚΟ ΚΑΙ ΚΑΠΟΔΙΣΤΡΙΑΚΟ ΠΑΝΕΠΙΣΤΗΜΙΟ ΑΘΗΝΩΝ</a></h1><h2>Σταδίου 5, Αθήνα</h2><p>Η Μονάδα Καινοτομίας και Επιχειρηματικότητας (ΜΟ.Κ.Ε.) του Εθνικού και Καποδιστριακού Πανεπιστημίου Αθηνών αποτελεί μία νέα μονάδα η οποία έχει ως βασικό σκοπό το σχεδιασμό και την υλοποίηση μαθημάτων και γενικότερων δραστηριοτήτων για την ενίσχυση της επιχειρηματικότητας στου φοιτητές και αποφοίτους του Ιδρύματος.</p>').addTo(map);

var hub31 = L.marker([37.9953718, 23.7320199]).addTo(map);
hub31.bindPopup('<h1><a href="http://www.mke.aueb.gr" target="blank">ΟΙΚΟΝΟΜΙΚΟ ΠΑΝΕΠΙΣΤΗΜΙΟ ΑΘΗΝΩΝ</a></h1><h2>Πατησίων 95, Αθήνα</h2><p>Αποστολή της Μονάδας είναι η ενθάρρυνση της καινοτομικής σκέψης και η καλλιέργεια επιχειρηματικού πνεύματος στην κοινότητα του Οικονομικού Πανεπιστημίου Αθηνών και η υποστήριξη των φοιτητών του Πανεπιστημίου αλλά και του ευρύτερου κοινού που ενδιαφέρεται, στην κατανόηση των απαιτήσεων και στην οργάνωση νέων καινοτόμων επιχειρηματικών προσπαθειών.</p>').addTo(map);
var hub32 = L.marker([37.9953718, 23.7320199]).addTo(map);
hub32.bindPopup('<h1><a href="http://www.mke.aueb.gr" target="blank">ΟΙΚΟΝΟΜΙΚΟ ΠΑΝΕΠΙΣΤΗΜΙΟ ΑΘΗΝΩΝ</a></h1><h2>Πατησίων 95, Αθήνα</h2><p>Αποστολή της Μονάδας είναι η ενθάρρυνση της καινοτομικής σκέψης και η καλλιέργεια επιχειρηματικού πνεύματος στην κοινότητα του Οικονομικού Πανεπιστημίου Αθηνών και η υποστήριξη των φοιτητών του Πανεπιστημίου αλλά και του ευρύτερου κοινού που ενδιαφέρεται, στην κατανόηση των απαιτήσεων και στην οργάνωση νέων καινοτόμων επιχειρηματικών προσπαθειών.</p>').addTo(map);
var hub33 = L.marker([37.9601156, 23.7204499]).addTo(map);
hub33.bindPopup('<h1><a href="http://www.mke.panteion.gr/" target="blank">ΠΑΝΤΕΙΟ ΠΑΝΕΠΙΣΤΗΜΙΟ ΚΟΙΝΩΝΙΚΩΝ ΚΑΙ ΠΟΛΙΤΙΚΩΝ</a></h1><h2>Λεωφ. Συγγρού 136, Αθήνα</h2>').addTo(map);

var hub34 = L.marker([37.9880595, 23.7305965]).addTo(map);
hub34.bindPopup('<h1><a href="http://www.dasta.asfa.gr/frontend/articles.php?cid=4" target="blank">ΑΝΩΤΑΤΗ ΣΧΟΛΗ ΚΑΛΩΝ ΤΕΧΝΩΝ</a></h1><h2>Πατησίων 42, Αθήνα</h2>').addTo(map);

var hub35 = L.marker([38.0047006, 23.6760987]).addTo(map);
hub35.bindPopup('<h1><a href="http://www.moke.teiath.gr" target="blank">ΤΕΙ ΑΘΗΝΑΣ</a></h1><h2>Αγίου Σπυρίδωνος &amp; Δημητσάνας, Αιγάλεω</h2><p>Η Μονάδα Καινοτομίας και Επιχειρηματικότητας στοχεύει στην ευαισθητοποίηση και την εξοικείωση των φοιτητών με την καινοτομία και την παραγωγική διαδικασία και στην παροχή των κατάλληλων γνώσεων για βελτίωση των μελλοντικών επαγγελματικών προοπτικών τους.</p>').addTo(map);

var hub36 = L.marker([38.0364865, 23.8025164]).addTo(map);
hub36.bindPopup('<h1><a href="http://www.athena-innovation.gr/" target="blank">Αθηνά - ΕΡΕΥΝΗΤΙΚΟ ΚΕΝΤΡΟ ΚΑΙΝΟΤΟΜΙΑΣ ΣΤΙΣ ΤΕΧΝΟΛΟΓΙΕΣ ΤΗΣ ΠΛΗΡΟΦΟΡΙΑΣ, ΤΩΝ ΕΠΙΚΟΙΝΩΝΙΩΝ ΚΑΙ ΤΗΝ ΓΝΩΣΗΣ</a></h1><h2>Αρτέμιδος 6 &amp; Επιδαύρου<br />Παράδεισος Αμαρουσίου</h2><p>Η προώθηση της αριστείας, της καινοτομικότητας και της ανταγωνιστικότητας στον κρίσιμο τομέα των Τεχνολογιών της Γνώσης και της Επικοινωνίας βρίσκονται στο επίκεντρο του ενδιαφέροντος και των αξιών που θεραπεύει το Ερευνητικό Κέντρο Αθηνά. Μέσα από εθνικά και διεθνή ερευνητικά έργα, στρατηγικές ανάπτυξης τεχνολογικών οικοσυστημάτων, δράσεις καινοτομικών εφαρμογών στο πλαίσιο των τεχνολογιών αυτών και ενέργειες μεταφοράς τόσο των γνώσεων όσο και των τεχνολογικών αποτελεσμάτων στο κοινωνικό και οικονομικό περιβάλλον, το ΕΚ Αθηνά πραγματώνει την αποστολή του για τη συμμετοχή της χώρας τόσο στην στρατηγική &laquo;Ευρώπη 2020&raquo; όσο και στην παγκόσμια απαίτηση για έξυπνη και αειφόρο ανάπτυξη για όλους.</p>').addTo(map);

var hub37 = L.marker([37.973388, 23.718243]).addTo(map);
hub37.bindPopup('<h1><a href="http://www.noa.gr" target="blank">ΕΘΝΙΚΟ ΑΣΤΕΡΟΣΚΟΠΕΙΟ ΑΘΗΝΩΝ / Ε.Α.Α.</a></h1><h2>Λόφος Νυμφών – Θησείο, 11810, Αθήνα</h2><p>Tο Εθνικό Αστεροσκοπείο Αθηνών (Ε.Α.Α.) είναι Δημόσιο Ερευνητικό Κέντρο (ΝΠΔΔ). Ιδρύθηκε το 1842 με δωρεά του Εθνικού ευεργέτη Γ. Σίνα. Οι επιστημονικές και ερευνητικές του δραστηριότητες  αφορούν στο εσωτερικό και το φλοιό της Γης, το ατμοσφαιρικό περιβάλλον, τον εγγύς διαστημικό χώρο και το αστροφυσικό Σύμπαν. Σχετικά με το αντικείμενα αυτά διεξάγεται βασική και εφαρμοσμένη έρευνα, με τη χρήση επίγειων και δορυφορικών παρατηρήσεων, και σύνδεση των αποτελεσμάτων με την επιχειρηματικότητα, τον πολιτισμό, την εκπαίδευση και την εκλαίκευση.</p>').addTo(map);

var hub38 = L.marker([37.9733522, 23.7455145]).addTo(map);
hub38.bindPopup('<h1><a href="http://www.eie.gr/" target="blank">ΕΘΝΙΚΟ ΙΔΡΥΜΑ ΕΡΕΥΝΩΝ / Ε.Ι.Ε.</a></h1><h2>Βασιλέως Κωνσταντίνου 48, 116 35, Αθήνα</h2><p>Το Εθνικό ΄Ϊδρυμα Ερευνών (ΕΙΕ), ένα από τα μεγαλύτερα Ελληνικά Ερευνητικά Κέντρα, είναι νομικό πρόσωπο, ιδιωτικού δικαίου, μη κερδοσκοπικού χαρακτήρα, το οποίο ιδρύθηκε το 1958 και από το 1989 εποπτεύεται από τη Γενική Γραμματεία Έρευνας & Τεχνολογίας (ΓΓΕΤ) του Υπουργείου Παιδείας και Θρησκευμάτων. Αποτελείται από τα παρακάτω Ερευνητικά Ινστιτούτα και μονάδες: <ul><li>Ινστιτούτο Ιστορικών Ερευνών (ΙΙΕ)</li><li>Ινστιτούτο Βιολογίας, Φαρμακευτικής Χημείας & Βιοτεχνολογίας (ΙΒΦΧΒ)</li><li>Ινστιτούτο Θεωρητικής και Φυσικής Χημείας (ΙΘΦΧ)</li><li>Εθνικό Κέντρο Τεκμηρίωσης (ΕΚΤ)</li></p>').addTo(map);

var hub39 = L.marker([37.999025, 23.818062]).addTo(map);
hub39.bindPopup('<h1><a href="http://www.demokritos.gr/" target="blank">ΕΘΝΙΚΟ ΚΕΝΤΡΟ ΦΥΣΙΚΩΝ ΕΠΙΣΤΗΜΩΝ &laquo;ΔΗΜΟΚΡΙΤΟΣ&raquo;</a></h1><h2>Πατρ. Γρηγορίου Ε\' &amp; Νεαπόλεως 27, Τ.Κ. 153 10, Αγία Παρασκευή</h2><p>Το ΕΚΕΦΕ &laquo;Δημόκριτος&raquo; χαρακτηρίζεται από την πολυκλαδικότητα των επιστημονικών περιοχών που θεραπεύονται στον ίδιο χώρο – φυσική, χημεία, μικροηλεκτρονική, βιολογία, πληροφορική, τηλεπικοινωνίες, πυρηνική τεχνολογία, ενέργεια, ραδιοφάρμακα- είναι μοναδική και οδηγεί σε επιστημονική αριστεία. Σημείο αναφοράς αποτελoύν επίσης τα επιστημονικά-τεχνολογικά επιτεύγματα και η ποιότητα της μεταπτυχιακής εκπαίδευσης που παρέχεται.</p><h1><a href="http://www.demokritos.gr/Contents.aspx?CatId=60" target="blank">Τεχνολογικό &amp; Επιστημονικό Πάρκο Αττικής &laquo;Λεύκιππος&raquo;</a></h1><h2>Πατρ. Γρηγορίου Ε\' &amp; Νεαπόλεως 27, Τ.Κ. 153 10, Αγία Παρασκευή</h2><p>Το νέο Τεχνολογικό & Επιστημονικό Πάρκο Αττικής &laquo;ΛΕΥΚΙΠΠΟΣ&raquo; ξεκίνησε να λειτουργεί στο Εθνικό Κέντρο Έρευνας Φυσικών Επιστημών &laquo;Δημόκριτος&raquo; τον Σεπτέμβριο του 2009 και βρίσκεται εντός των εγκαταστάσεων του ΕΚΕΦΕ &laquo;Δημόκριτος&raquo; στην Αγία Παρασκευή Αττικής.</p>').addTo(map);

var hub40 = L.marker([37.9815649, 23.7273856]).addTo(map);
hub40.bindPopup('<h1><a href="http://www.ekke.gr" target="blank">ΕΘΝΙΚΟ ΚΕΝΤΡΟ ΚΟΙΝΩΝΙΚΩΝ ΕΡΕΥΝΩΝ / Ε.Κ.Κ.Ε.</a></h1><h2>Κρατίνου 9 και Αθηνάς, Πλατεία Κοτζιά, 10552, Αθήνα</h2><p>Το Εθνικό Κέντρο Κοινωνικών Ερευνών (ΕΚΚΕ) ιδρύθηκε το 1959 υπό την αιγίδα της UNESCO και αποτελεί το μοναδικό δημόσιο φορέα στην Ελλάδα που θεραπεύει τις  κοινωνικές επιστήμες. Είναι Νομικό Πρόσωπο Δημοσίου Δικαίου, εποπτευόμενο από την Γενική Γραμματεία Έρευνας και Τεχνολογίας (ΓΓΕΤ) του Υπουργείου Πολιτισμού, Παιδείας και Θρησκευμάτων και αναπτύσσεται στους παρακάτω άξονες: στην Κοινωνική Πολιτική, στις Κοινωνικές δομές και τον Κοινωνικό μετασχηματισμό, στην Πολιτική Κοινωνιολογία και τους θεσμούς, στην Κοινωνιολογία του αστικού χώρου, στην Κοινωνική Ανθρωπολογία και Κοινωνιολογία του αγροτικού χώρου, στην Κοινωνιολογία του πολιτισμού.</p>').addTo(map);

var hub41 = L.marker([37.9762873, 23.7470222]).addTo(map);
hub41.bindPopup('<h1><a href="http://www.pasteur.gr/" target="blank">Ελληνικό Ινστιτούτο Παστέρ</a></h1><h2>Λεωφ. Βασ. Σοφίας 127</h2><p>Από την ίδρυσή του (1920) μέχρι σήμερα, το Ελληνικό Ινστιτούτο Παστέρ (ΕΙΠ) παραμένει πιστό στην αποστολή του που είναι η πρόληψη και η θεραπεία των Μολυσματικών νοσημάτων μέσω της Βασικής Έρευνας, της Εκπαίδευσης και της  προσφοράς Υπηρεσιών στη Δημόσια Υγεία.<br />Πέρα από την εστίαση στην καταπολέμηση των μολυσματικών νοσημάτων, στόχο της Έρευνας στο ΕΙΠ σήμερα αποτελεί και  η καταπολέμηση άλλων νοσημάτων όπως τα αυτοάνοσα, τα νευροεκφυλιστικά, τα νευρομυικά και διάφορες μορφές καρκίνου.</p>').addTo(map);

var hub42 = L.marker([37.823347, 23.788767]).addTo(map);
hub42.bindPopup('<h1><a href="http://www.fleming.gr/" target="blank">Ερευνητικό Κέντρο Βιοϊατρικών Επιστημών &laquo;Αλέξανδρος Φλέμινγκ&raquo;</a></h1><h2>Αλ.Φλέμιγκ 14-16, Τ.Κ. 16672, Βάρη Αττικής</h2><p>Βασικός στόχος της έρευνας που διεξάγεται στο Ε.ΚΕ.Β.Ε &laquo;Αλ. Φλέμιγκ&raquo; είναι ο προσδιορισμός των παθογόνων λειτουργιών διαφόρων γονιδίων στην παθολογία σε επίπεδο του οργανισμού των θηλαστικών.<br />Το Κέντρο αποτελείται από δύο υψηλού επιπέδου Ινστιτούτα, το Ινστιτούτο Ανοσολογίας και το Ινστιτούτο Μοριακής Βιολογίας και Γενετικής, με διακρίσεις και εμπειρογνωμοσύνη στους τομείς της κυτταρικής ανοσολογίας, της προτυποποίησης ασθενειών, της κατασκευής και ανάλυσης κλασσικών και μεταβλητών διαγονιδιακών συστημάτων στο ποντίκι, της μετα-μεταγραφικής ρύθμισης της γονιδιακής έκφρασης, των εξω- και ενδό- κυττάριων μηχανισμών μεταβίβασής σημάτων καθώς και της λειτουργικής γονιδιωματικής.</p>').addTo(map);

var hub43 = L.marker([37.733346, 23.904032]).addTo(map);
hub43.bindPopup('<h1><a href="http://www.hcmr.gr/gr/indexel.php" target="blank">Ελληνικό Κέντρο Θαλασσίων Ερευνών / ΕΛ.ΚΕ.Θ.Ε</a></h1><h2>46.7 χλμ Αθηνών – Σουνίου Ανάβυσσος</h2><p>Σκοπός του ΕΛ.ΚΕ.Θ.Ε. είναι η διεξαγωγή επιστημονικής και τεχνολογικής έρευνας, η πειραματική ανάπτυξη και επίδειξη, η διάδοση και εφαρμογή των αποτελεσμάτων της έρευνας, ιδιαίτερα στους τομείς της μελέτης και προστασίας της υδρόσφαιρας, των οργανισμών της, των ορίων της με την ατμόσφαιρα, την ακτή και το βυθό, των φυσικών, χημικών, βιολογικών και γεωλογικών συνθηκών που επικρατούν και διέπουν τα παραπάνω συστήματα, με: <ol type="a"><li>παραγωγή προϊόντων και παροχή υπηρεσιών</li><li>υποστήριξη στη λήψη αποφάσεων που αφορούν την κοινωνία, την οικονομία, τον πολιτισμό</li><li>οικονομική τους εκμετάλλευση είτε από το ΕΛ.ΚΕ.Θ.Ε. ή και τους εργαζόμενους σ\' αυτό ή και από τρίτους.</p>').addTo(map);

var hub44 = L.marker([37.7057428, 24.0518849]).addTo(map);
hub44.bindPopup('<h1><a href="http://www.ltp.ntua.gr/" target="blank">ΤΕΧΝΟΛΟΓΙΚΟ ΠΟΛΙΤΙΣΤΙΚΟ ΠΑΡΚΟ ΛΑΥΡΙΟΥ</a></h1><h2>Συγκρότημα Γαλλικής Εταιρείας Μεταλλείων Λαυρίου Λεωφόρος Aθηνών - Λαυρίου, ΛΑΥΡΙΟ</h2><p>Το Τεχνολογικό Πολιτιστικό Πάρκο Λαυρίου (Τ.Π.Π.Λ.), είναι ένας οργανισμός επιστημονικής έρευνας, εκπαιδεύσεως, επιχειρηματικής δραστηριότητος και πολιτισμού. Ιδρύθηκε στη θέση της παλαιάς Γαλλικής Εταιρείας Λαυρίου (Compagnie Francaise des Mines du Laurium) το 1992, με πρωτοβουλία του Εθνικού Μετσόβιου Πολυτεχνείου. (Δείτε το Χρονολόγιο ίδρυσης του ΤΠΠΛ)</p>').addTo(map);
