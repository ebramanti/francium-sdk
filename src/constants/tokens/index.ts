import { NATIVE_MINT } from "@solana/spl-token";
import { PublicKey } from "@solana/web3.js";

export const TOKENS = {
  SOL: {
    symbol: 'SOL',
    name: 'Solana',
    mintAddress: NATIVE_MINT,
    decimals: 9
  },
  WSOL: {
    symbol: 'WSOL',
    name: 'Wrapped Solana',
    mintAddress: new PublicKey('So11111111111111111111111111111111111111112'),
    decimals: 9
  },
  BTC: {
    symbol: 'BTC',
    name: 'Wrapped Bitcoin',
    mintAddress: new PublicKey('9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E'),
    decimals: 6
  },
  ETH: {
    symbol: 'ETH',
    name: 'Wrapped Ethereum',
    mintAddress: new PublicKey('2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk'),
    decimals: 6
  },
  USDT: {
    symbol: 'USDT',
    name: 'USDT',
    mintAddress: new PublicKey('Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB'),
    decimals: 6
  },
  WUSDT: {
    symbol: 'WUSDT',
    name: 'Wrapped USDT',
    mintAddress: new PublicKey('BQcdHdAQW1hczDbBi9hiegXAR7A98Q9jx3X3iBBBDiq4'),
    decimals: 6
  },
  USDC: {
    symbol: 'USDC',
    name: 'USDC',
    mintAddress: new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'),
    decimals: 6
  },
  WUSDC: {
    symbol: 'WUSDC',
    name: 'Wrapped USDC',
    mintAddress: new PublicKey('BXXkv6z8ykpG1yuvUDPgh732wzVHB69RnB9YgSYh3itW'),
    decimals: 6
  },
  YFI: {
    symbol: 'YFI',
    name: 'Wrapped YFI',
    mintAddress: new PublicKey('3JSf5tPeuscJGtaCp5giEiDhv51gQ4v3zWg8DGgyLfAB'),
    decimals: 6
  },
  LINK: {
    symbol: 'LINK',
    name: 'Wrapped Chainlink',
    mintAddress: new PublicKey('CWE8jPTUYhdCTZYWPTe1o5DFqfdjzWKc9WKz6rSjQUdG'),
    decimals: 6
  },
  ALEPH: {
    symbol: 'ALEPH',
    name: 'Wrapped ALEPH',
    mintAddress: new PublicKey('CsZ5LZkDS7h9TDKjrbL7VAwQZ9nsRu8vJLhRYfmGaN8K'),
    decimals: 6
  },
  SXP: {
    symbol: 'SXP',
    name: 'Wrapped SXP',
    mintAddress: new PublicKey('SF3oTvfWzEP3DTwGSvUXRrGTvr75pdZNnBLAH9bzMuX'),
    decimals: 6
  },
  HGET: {
    symbol: 'HGET',
    name: 'Wrapped HGET',
    mintAddress: new PublicKey('BtZQfWqDGbk9Wf2rXEiWyQBdBY1etnUUn6zEphvVS7yN'),
    decimals: 6
  },
  CREAM: {
    symbol: 'CREAM',
    name: 'Wrapped CREAM',
    mintAddress: new PublicKey('5Fu5UUgbjpUvdBveb3a1JTNirL8rXtiYeSMWvKjtUNQv'),
    decimals: 6
  },
  UBXT: {
    symbol: 'UBXT',
    name: 'Wrapped UBXT',
    mintAddress: new PublicKey('873KLxCbz7s9Kc4ZzgYRtNmhfkQrhfyWGZJBmyCbC3ei'),
    decimals: 6
  },
  HNT: {
    symbol: 'HNT',
    name: 'Wrapped HNT',
    mintAddress: new PublicKey('HqB7uswoVg4suaQiDP3wjxob1G5WdZ144zhdStwMCq7e'),
    decimals: 6
  },
  FRONT: {
    symbol: 'FRONT',
    name: 'Wrapped FRONT',
    mintAddress: new PublicKey('9S4t2NEAiJVMvPdRYKVrfJpBafPBLtvbvyS3DecojQHw'),
    decimals: 6
  },
  AKRO: {
    symbol: 'AKRO',
    name: 'Wrapped AKRO',
    mintAddress: new PublicKey('6WNVCuxCGJzNjmMZoKyhZJwvJ5tYpsLyAtagzYASqBoF'),
    decimals: 6
  },
  HXRO: {
    symbol: 'HXRO',
    name: 'Wrapped HXRO',
    mintAddress: new PublicKey('DJafV9qemGp7mLMEn5wrfqaFwxsbLgUsGVS16zKRk9kc'),
    decimals: 6
  },
  UNI: {
    symbol: 'UNI',
    name: 'Wrapped UNI',
    mintAddress: new PublicKey('DEhAasscXF4kEGxFgJ3bq4PpVGp5wyUxMRvn6TzGVHaw'),
    decimals: 6
  },
  SRM: {
    symbol: 'SRM',
    name: 'Serum',
    mintAddress: new PublicKey('SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt'),
    decimals: 6
  },
  FTT: {
    symbol: 'FTT',
    name: 'Wrapped FTT',
    mintAddress: new PublicKey('AGFEad2et2ZJif9jaGpdMixQqvW5i81aBdvKe7PHNfz3'),
    decimals: 6
  },
  TOMO: {
    symbol: 'TOMO',
    name: 'Wrapped TOMO',
    mintAddress: new PublicKey('GXMvfY2jpQctDqZ9RoU3oWPhufKiCcFEfchvYumtX7jd'),
    decimals: 6
  },
  KARMA: {
    symbol: 'KARMA',
    name: 'Wrapped KARMA',
    mintAddress: new PublicKey('EcqExpGNFBve2i1cMJUTR4bPXj4ZoqmDD2rTkeCcaTFX'),
    decimals: 4
  },
  LUA: {
    symbol: 'LUA',
    name: 'Wrapped LUA',
    mintAddress: new PublicKey('EqWCKXfs3x47uVosDpTRgFniThL9Y8iCztJaapxbEaVX'),
    decimals: 6
  },
  MATH: {
    symbol: 'MATH',
    name: 'Wrapped MATH',
    mintAddress: new PublicKey('GeDS162t9yGJuLEHPWXXGrb1zwkzinCgRwnT8vHYjKza'),
    decimals: 6
  },
  KEEP: {
    symbol: 'KEEP',
    name: 'Wrapped KEEP',
    mintAddress: new PublicKey('GUohe4DJUA5FKPWo3joiPgsB7yzer7LpDmt1Vhzy3Zht'),
    decimals: 6
  },
  SWAG: {
    symbol: 'SWAG',
    name: 'Wrapped SWAG',
    mintAddress: new PublicKey('9F9fNTT6qwjsu4X4yWYKZpsbw5qT7o6yR2i57JF2jagy'),
    decimals: 6
  },
  FIDA: {
    symbol: 'FIDA',
    name: 'Bonfida',
    mintAddress: new PublicKey('EchesyfXePKdLtoiZSL8pBe8Myagyy8ZRqsACNCFGnvp'),
    decimals: 6
  },
  KIN: {
    symbol: 'KIN',
    name: 'KIN',
    mintAddress: new PublicKey('kinXdEcpDQeHPEuQnqmUgtYykqKGVFq6CeVX5iAHJq6'),
    decimals: 5
  },
  MAPS: {
    symbol: 'MAPS',
    name: 'MAPS',
    mintAddress: new PublicKey('MAPS41MDahZ9QdKXhVa4dWB9RuyfV4XqhyAZ8XcYepb'),
    decimals: 6
  },
  OXY: {
    symbol: 'OXY',
    name: 'OXY',
    mintAddress: new PublicKey('z3dn17yLaGMKffVogeFHQ9zWVcXgqgf3PQnDsNs2g6M'),
    decimals: 6
  },
  RAY: {
    symbol: 'RAY',
    name: 'Raydium',
    mintAddress: new PublicKey('4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R'),
    decimals: 6
  },
  COPE: {
    symbol: 'COPE',
    name: 'COPE',
    mintAddress: new PublicKey('3K6rftdAaQYMPunrtNRHgnK2UAtjm2JwyT2oCiTDouYE'),
    decimals: 6,
  },
  STEP: {
    symbol: 'STEP',
    name: 'STEP',
    mintAddress: new PublicKey('StepAscQoEioFxxWGnh2sLBDFp9d8rvKz2Yp39iDpyT'),
    decimals: 9,
  },
  MEDIA: {
    symbol: 'MEDIA',
    name: 'MEDIA',
    mintAddress: new PublicKey('ETAtLmCmsoiEEKfNrHKJ2kYy3MoABhU6NQvpSfij5tDs'),
    decimals: 6
  },
  ROPE: {
    symbol: 'ROPE',
    name: 'ROPE',
    mintAddress: new PublicKey('8PMHT4swUMtBzgHnh5U564N5sjPSiUz2cjEQzFnnP1Fo'),
    decimals: 9
  },
  MER: {
    symbol: 'MER',
    name: 'Mercurial',
    mintAddress: new PublicKey('MERt85fc5boKw3BW1eYdxonEuJNvXbiMbs6hvheau5K'),
    decimals: 6,
  },
  LIKE: {
    symbol: 'LIKE',
    name: 'LIKE',
    decimals: 9
  },
  ATLAS: {
    symbol: 'ATLAS',
    name: 'ATLAS',
    decimals: 8,
    mintAddress: new PublicKey("ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx")
  },
  POLIS: {
    symbol: 'POLIS',
    name: 'POLIS',
    decimals: 8,
    mintAddress: new PublicKey("poLisWXnNRwC6oBu1vHiuKQzFjGL4XDSu4g9qjz9qVk"),
  },
  ORCA: {
    symbol: 'ORCA',
    name: 'Orca',
    decimals: 6,
    mintAddress: new PublicKey("orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE")
  },
  mSOL: {
    symbol: 'mSOL',
    name: 'Marinade.finance',
    decimals: 9,
    mintAddress: new PublicKey("mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So")
  },
  MNDE: {
    symbol: 'MNDE',
    name: 'Marinade.finance',
    decimals: 9,
    mintAddress: new PublicKey("MNDEFzGvMt87ueuHvVU9VcTqsAP5b3fTGPsHuuPA5ey")
  }
};