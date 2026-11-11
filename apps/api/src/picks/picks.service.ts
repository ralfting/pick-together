import { Injectable } from "@nestjs/common";
import type { PickModel } from "./picks.model";

const mockPick = {
  id: "1",
  title: "Sexta à noite",
  deadline: new Date("2026-11-14T20:00:00Z"),
  options: [
    { id: "1", name: "Bar do Zé" },
    { id: "2", name: "Pizzaria Napoli" },
  ],
};

@Injectable()
export class PicksService {
  private readonly picks: PickModel[] = [mockPick];

  findAll() {
    return this.picks;
  }
}
