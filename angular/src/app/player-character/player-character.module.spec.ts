import { PlayerCharacterModule } from './player-character.module';

describe('PlayerCharacterModule', () => {
  let playerCharacterModule: PlayerCharacterModule;

  beforeEach(() => {
    playerCharacterModule = new PlayerCharacterModule();
  });

  it('should create an instance', () => {
    expect(playerCharacterModule).toBeTruthy();
  });
});
