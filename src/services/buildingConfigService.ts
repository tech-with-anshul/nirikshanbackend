import buildingsConfig from "../config/buildingsConfig.json";

interface BuildingConfig {
  name: string;
  displayName: string;
  totalCapacity: number;
  currentOccupancy: number;
  floors: number;
  roomsPerFloor: number;
  studentsPerRoom: number;
  description: string;
  facilities: string[];
  wardenOffice: string;
}

export class BuildingConfigService {
  /**
   * Get all building configurations
   */
  static getAllBuildingsConfig(): BuildingConfig[] {
    return buildingsConfig.buildings as BuildingConfig[];
  }

  /**
   * Get all building names (for validation)
   */
  static getAllBuildingNames(): string[] {
    return (buildingsConfig.buildings as BuildingConfig[]).map((b) => b.name);
  }

  /**
   * Validate if a building name exists in config
   */
  static isValidBuilding(buildingName: string): boolean {
    return this.getAllBuildingNames().includes(buildingName);
  }

  /**
   * Get configuration for a specific building
   */
  static getBuildingConfig(buildingName: string): BuildingConfig | undefined {
    return (buildingsConfig.buildings as BuildingConfig[]).find(
      (b) => b.name === buildingName
    );
  }

  /**
   * Get building display name
   */
  static getBuildingDisplayName(buildingName: string): string {
    const config = this.getBuildingConfig(buildingName);
    return config?.displayName || `Building ${buildingName}`;
  }

  /**
   * Get total capacity across all buildings
   */
  static getTotalSystemCapacity(): number {
    return (buildingsConfig.buildings as BuildingConfig[]).reduce(
      (total, building) => total + building.totalCapacity,
      0
    );
  }

  /**
   * Get building metadata for API responses
   */
  static getBuildingMetadata(buildingName: string) {
    const config = this.getBuildingConfig(buildingName);

    if (!config) {
      return null;
    }

    return {
      name: config.name,
      displayName: config.displayName,
      totalCapacity: config.totalCapacity,
      floors: config.floors,
      roomsPerFloor: config.roomsPerFloor,
      studentsPerRoom: config.studentsPerRoom,
      description: config.description,
      facilities: config.facilities,
      wardenOffice: config.wardenOffice,
    };
  }

  /**
   * Validate if building has capacity for new students
   */
  static hasCapacity(buildingName: string, currentOccupancy: number): boolean {
    const config = this.getBuildingConfig(buildingName);
    if (!config) return false;

    return currentOccupancy < config.totalCapacity;
  }

  /**
   * Get available capacity for a building
   */
  static getAvailableCapacity(buildingName: string, currentOccupancy: number): number {
    const config = this.getBuildingConfig(buildingName);
    if (!config) return 0;

    return Math.max(0, config.totalCapacity - currentOccupancy);
  }
}

export type { BuildingConfig };