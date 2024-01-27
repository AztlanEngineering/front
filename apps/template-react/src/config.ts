export interface Config {
  maintenance?: {
    start:Date;
    end  :Date;
  };
}

const config: Config = {
  /*
  maintenance:{
    start:new Date(new Date().getTime() - 2 * 24 * 60 * 60 * 1000),
    end:new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000),
  }, */
}

export default config
