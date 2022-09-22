import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import eta from "lume/plugins/eta.ts";

const site = lume();

site.use(jsx());
site.use(eta());

export default site;