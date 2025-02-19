export function SignupClosedSection() {
  return (
    <section
      id="påmelding"
      className="flex flex-col items-center gap-2.5 p-5 text-center"
    >
      <h2 className="text-xl font-bold">Påmelding</h2>
      <h3 className="text-lg font-bold">Påmeldingen er stengt</h3>
      <p className="text-sm leading-6 md:text-base">
        Alle plassene til arrangementet er tatt, men du er ikke for sent ute
        helt enda. Send en mail til{" "}
        <a href="mailto:hackathonlite.sandvika@gmail.com">
          hackathonlite.sandvika@gmail.com
        </a>{" "}
        om du ønsker å være på ventelisten.
      </p>
      <h3 className="text-lg font-bold">Vil du bli mentor?</h3>
      <p className="text-sm leading-6 md:text-base">
        Vi søker engasjerte mentorer til{" "}
        <span className="font-semibold">Hackathon Lite Sandvika</span>! Har du
        erfaring med programmering og lyst til å veilede unge tech-entusiaster?
        Som mentor hjelper du nybegynnere med kode, problemløsning og
        prosjektutvikling - og får samtidig verdifull erfaring og en liten
        påskjønnelse for innsatsen.
      </p>
      <p className="text-sm leading-6 md:text-base">
        Bli med og inspirer neste generasjons utviklere!{" "}
        <span className="font-semibold">Interessert</span>? Ta kontakt på{" "}
        <a href="mailto:hackathonlite.sandvika@gmail.com">
          hackathonlite.sandvika@gmail.com
        </a>
        .
      </p>
    </section>
  );
}
