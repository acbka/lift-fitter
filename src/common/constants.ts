import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import lift1 from "../assets/lift1.jpg";
import lift2 from "../assets/lift2.jpg";
import lift3 from "../assets/lift3.jpg";
import lift4 from "../assets/lift4.jpg";
import lift5 from "../assets/lift5.jpg";
import modernization from "../assets/modernization.jpg";
import montaznik from "../assets/montaznik.jpg";
import technik from "../assets/tehnik.jpg";
import kleemann from "../assets/kleemann.png";
import schindler from "../assets/schindler.png";
import otis from "../assets/otis.png";
import kone from "../assets/kone.png";
import schmitt from "../assets/schmitt.png";
import tke from "../assets/tke.png";
import mp from "../assets/mp.png";

export type Slide = {
  id: number;
  image: string;
  title?: string;
  caption?: string;
};

type MenuItemType = {
  link: string;
  label: string;
};

export type ProjectAndServiceType = {
  id?: string;
  title: string;
  shortDescription: string;
  description?: string;
  image?: string;
};

export type PartnerType = {
  name: string;
  logo: string;
  url: string;
};

export const sliders: Slide[] = [
  {
    id: 1,
    image: slide1,
    title: "Elevating quality to new heights",
    caption: "Feel the expertise with us",
  },
  {
    id: 2,
    image: slide2,
    title: "Precision in every installation",
    caption: "Your project. Our responsibility.",
  },
  {
    id: 3,
    image: slide3,
    title: "Lifting standards above expectations",
    caption: "Reliable. Professional. Proven.",
  },
];

export const menuItems: MenuItemType[] = [
  { link: "/", label: "Home" },
  { link: "/services", label: "Services" },
  { link: "/projects", label: "Projects" },
  { link: "/about", label: "About" },
  { link: "/contacts", label: "Contacts" },
];

export const services: ProjectAndServiceType[] = [
  {
    id: "service1",
    title: "Pogotowie dźwigowe",
    shortDescription:
      "Pogotowie dźwigowe LiftFitter dla wygody naszych klientów pracujemy w trybie pogotowia dźwigowego 24/7",
    description: `<p>Pogotowie dźwigowe LiftFitter</p>
    <p>Dla wygody naszych klientów pracujemy w trybie pogotowia dźwigowego 24/7. Doskonale wiemy, że awarie zdarzają się nagle i w najmniej odpowiednim momencie, dlatego reagujemy szybko i skutecznie.</p>
    <p>W przypadku jakichkolwiek problemów technicznych z Państwa windą prosimy o natychmiastowy kontakt. Nasz zespół fachowców możliwie szybko pojawi się na miejscu, zdiagnozuje usterkę i bezpiecznie przywróci urządzenie do pełnej sprawności.</p>`,
    image: technik,
  },
  {
    id: "service2",
    title: "Serwis i konserwacja wind",
    shortDescription: `<p><strong>LiftFitter – Serwis i konserwacja wind w całej Polsce</strong><br>Zapewniamy profesjonalny serwis, naprawy i modernizacje wind osobowych, towarowych, platform dla niepełnosprawnych oraz innych urządzeń dźwigowych. Działamy 24/7, szybko usuwamy awarie i dbamy o bezpieczne, bezproblemowe działanie sprzętu przez lata.</p>`,
    description: `<p><strong>Serwis i konserwacja wind</strong><br><strong >LiftFitter</strong> oferuje kompleksową i rzetelną obsługę serwisową urządzeń dźwigowych na terenie całej Polski. Realizujemy zarówno naprawy bieżące, jak i prace konserwacyjne, dbając o to, aby sprzęt działał niezawodnie przez wiele lat. Regularne przeglądy techniczne, kontrola elementów konstrukcyjnych, połączeń i smarowania to klucz do utrzymania wind w doskonałym stanie i zapewnienia bezpieczeństwa ich użytkowników.</p>
    <p>Świadczymy usługi naprawy i serwisu wind osobowych, towarowych, platform dla osób z niepełnosprawnościami, schodołazów oraz chodników ruchomych. Doradzamy także w zakresie wyboru odpowiednich urządzeń, ich dopasowania do konkretnego obiektu oraz późniejszego utrzymania.</p>
    <hr>
    <p><strong>Pogotowie dźwigowe</strong><br>Działamy w trybie całodobowego pogotowia dźwigowego – 24/7. Doskonale wiemy, że awarie potrafią wystąpić w najmniej oczekiwanym momencie. Dlatego reagujemy natychmiast, oferując fachową pomoc w sytuacjach awaryjnych. W przypadku problemów z działaniem windy prosimy o bezzwłoczny kontakt – nasi specjaliści szybko zlokalizują usterkę, usuną ją i przywrócą urządzenie do pełnej sprawności.</p>
    <hr>
    <p><strong>Naprawa wind i urządzeń dźwigowych</strong><br>W przypadku awarii windy lub konieczności wymiany zużytych elementów niezwykle istotna jest szybka interwencja. Nasi serwisanci natychmiast podejmują działania, aby naprawić sprzęt i umożliwić jego dalsze, bezpieczne użytkowanie. Posiadamy dostęp do części zamiennych oraz podzespołów od wielu renomowanych producentów, co pozwala nam usuwać nawet poważne awarie bez zbędnej zwłoki.</p>
    <p>Oferujemy także modernizacje wind w oparciu o nowoczesne rozwiązania techniczne. Zapewniamy pełne wsparcie doradcze oraz dobór niezbędnych komponentów. Po szczegółowe informacje zapraszamy do kontaktu telefonicznego lub mailowego z naszym biurem.</p>`,
    image: montaznik,
  },
  {
    id: "service3",
    title: "Modernisation & repair",
    shortDescription: `<p><strong>Liftfitter</strong> provides expert lift, escalator, and moving walkway modernisation, refurbishment, and replacement for <strong>any make or model</strong>. From quick component upgrades to full replacements, we improve safety, efficiency, and appearance—ensuring your equipment performs like new.</p>`,
    description: `<p>Lift Modernisation &amp; Replacement<br>
    The reliable performance of your lift or escalator is essential to keeping people moving in your building. Investing in modernisation extends your equipment’s life and saves money compared to installing a brand-new lift.</p>
    <p>Liftfitter is your expert partner for lift refurbishment and modernisation. We upgrade and restore lifts, escalators, and moving walkways of any make or model – from historic installations to the latest systems.</p>
    <p>Modernisation or full refurbishment improves safety, enhances your building’s appearance, and delivers immediate energy savings.</p>
    <p>We can help you:</p>
    <p>Improve reliability and safety</p>
    <p>Enhance appearance and user satisfaction</p>
    <p>Reduce running costs through better energy efficiency</p>
    <p>Ensure compliance with the latest standards and regulations</p>
    <p>Our expert engineers will recommend the best solution for your needs:</p>
    <p>Component Upgrades – a fast, cost-effective way to improve performance</p>
    <p>Systems Modernisation – replacing key systems such as electrics, door operators, or communication devices</p>
    <p>Full Replacement – removing your old lift and installing a new one in the existing shaft</p>
    <p>With Liftfitter, your lift will perform like new – whatever the type, brand, or age of your equipment.</p>
    <p></p>`,
    image: modernization,
  },
];

export const projects: ProjectAndServiceType[] = [
  {
    id: "project1",
    title: "Project One",
    shortDescription: "Brief description",
    description: "Description for your first project.",
    image: lift1,
  },
  {
    id: "project2",
    title: "Project Two",
    shortDescription: "Brief description",
    description: "Description for your second project.",
    image: lift2,
  },
  {
    id: "project3",
    title: "Project Three",
    shortDescription: "Brief description",
    description: "Description for your third project.",
    image: lift3,
  },
  {
    id: "project4",
    title: "Project Four",
    shortDescription: "Brief description",
    description: "Description for your first project.",
    image: lift4,
  },
  {
    id: "project5",
    title: "Project Five",
    shortDescription: "Brief description",
    description: "Description for your first project.",
    image: lift5,
  },
];

export const partners: PartnerType[] = [
  {
    name: "KLEEMANN",
    logo: kleemann,
    url: "https://kleemannlifts.com/",
  },
  {
    name: "Schindler",
    logo: schindler,
    url: "https://group.schindler.com/",
  },
  {
    name: "Otis",
    logo: otis,
    url: "https://kleemannlifts.com/",
  },
  {
    name: "KONE",
    logo: kone,
    url: "https://www.kone.com/",
  },
  {
    name: "Schmitt + Sohn",
    logo: schmitt,
    url: "https://www.schmitt-elevators.com/",
  },
  {
    name: "TKE",
    logo: tke,
    url: "https://www.tkelevator.com/",
  },
  {
    name: "MP",
    logo: mp,
    url: "https://www.mplifts.com/",
  },
];
