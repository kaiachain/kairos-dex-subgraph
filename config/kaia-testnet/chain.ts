import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const FACTORY_ADDRESS = Address.fromString('0xb522cF1A5579c0EAe37Da6797aeBcE1bac2D4a29')

// TODO: Update with actual WKAI (Wrapped Kaia) address on testnet
export const REFERENCE_TOKEN = '0x043c471bee060e00a56ccd02c0ca286808a5a436' // WKAIA - UPDATE THIS
// TODO: Update with a stable token pool address once created
export const STABLE_TOKEN_POOL = '0xe3a1d4bcab20a4f8ade808df968c481f27e39a8b' // WKAIA/USDT pool

export const TVL_MULTIPLIER_THRESHOLD = '2'
export const MATURE_MARKET = '1000000'
export const MINIMUM_NATIVE_LOCKED = BigDecimal.fromString('100')

export const ROLL_DELETE_HOUR = 768
export const ROLL_DELETE_MINUTE = 1680

export const ROLL_DELETE_HOUR_LIMITER = BigInt.fromI32(500)
export const ROLL_DELETE_MINUTE_LIMITER = BigInt.fromI32(1000)

// token where amounts should contribute to tracked volume and liquidity
// usually tokens that many tokens are paired with
// TODO: Update with actual token addresses on Kaia testnet
export const WHITELIST_TOKENS: string[] = [
  REFERENCE_TOKEN, // WKAIA
  // Add common tokens on Kaia testnet here
  // Example: '0x...', // USDC
  '0xd077a400968890eacc75cdc901f0356c943e4fdb' // USDT
]

export const STABLE_COINS: string[] = [
  // TODO: Add stablecoin addresses on Kaia testnet
  '0xd077a400968890eacc75cdc901f0356c943e4fdb'
]

export const SKIP_POOLS: string[] = []

export const POOL_MAPINGS: Array<Address[]> = []

export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const STATIC_TOKEN_DEFINITIONS: TokenDefinition[] = []
